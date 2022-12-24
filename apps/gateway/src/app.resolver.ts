import {
  Field,
  Mutation,
  ObjectType,
  Context,
  Query,
  Resolver,
  Subscription,
} from "@nestjs/graphql";
import { ClientGrpc, ClientKafka } from "@nestjs/microservices";
import { Metadata } from "@grpc/grpc-js";
import { PubSub } from "graphql-subscriptions";
import { Inject } from "@nestjs/common";
import { SkipThrottle, Throttle } from "@nestjs/throttler";
import { firstValueFrom } from "rxjs";

@ObjectType()
export class Queue {
  @Field()
  topicName: string;

  @Field()
  partition: number;

  @Field()
  errorCode: number;

  @Field()
  baseOffset: string;

  @Field()
  logAppendTime: string;

  @Field()
  logStartOffset: string;
}

@ObjectType()
export class Welcome {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  price: number;
}

const pubSub = new PubSub();

@Resolver()
export class AppResolver {
  private invoiceService;
  constructor(
    @Inject("USER_SERVICE") private readonly client: ClientKafka,
    @Inject("INVOICE_PACKAGE") private readonly invoice: ClientGrpc
  ) {}

  onModuleInit() {
    this.invoiceService = this.invoice.getService("InvoiceService");
  }

  @Query(() => Welcome, { name: "welcome" })
  async wellcome(@Context() ctx: any): Promise<Welcome> {
    const { authorization } = ctx.req.headers;

    const metadata = new Metadata();
    metadata.set("authorization", authorization);
    const source = this.invoiceService.getInvoiceById({ id: "1000" }, metadata);
    const data = await firstValueFrom<Welcome>(source);

    return data;
  }

  @Throttle(10, 60)
  @Mutation(() => String, { name: "createUser" })
  async create() {
    /* this.client.emit(
      "user.create",
      JSON.stringify({ id: "1", name: "John", email: "example@email.com" })
    ); */

    //pubSub.publish("createUser", "Usuário criado");

    return "Foi";
  }

  @Mutation(() => String, { name: "userBanned" })
  userBanned() {
    this.client.emit(
      "user.banned",
      JSON.stringify({ id: "1", name: "John", email: "example@email.com" })
    );

    pubSub.publish("userBanned", "Hello");

    return "Banned";
  }

  /*   @MessagePattern("user.create")
  async user(@Payload() data: any) {
    console.log("data", data);
    pubSub.publish("createUser", "Usuário criado!");
  } */

  @Mutation(() => [Queue], { name: "createInvoice" })
  async createInvoice() {
    const source = this.client.emit(
      "invoice.create",
      JSON.stringify({ id: "1000", userId: "1", name: "Computador" })
    );
    const data = await firstValueFrom(source);

    return data;
  }

  @SkipThrottle()
  @Subscription(() => String, {
    resolve(value) {
      return value;
    },
  })
  async createUser() {
    return pubSub.asyncIterator("createUser");
  }

  @SkipThrottle()
  @Subscription(() => String, {
    resolve(value) {
      return value;
    },
  })
  async userBannedSubscription() {
    return pubSub.asyncIterator("userBanned");
  }
}
