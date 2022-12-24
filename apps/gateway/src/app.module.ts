import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ThrottlerModule } from "@nestjs/throttler";
import { ClientsModule, Transport } from "@nestjs/microservices";
import * as path from "node:path";

import { GqlThrottlerGuard } from "./app.guard";

import { AppResolver } from "./app.resolver";

@Module({
  imports: [
    ThrottlerModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      cors: {
        origin: "*",
      },
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
      subscriptions: {
        "graphql-ws": true,
        "subscriptions-transport-ws": true,
      },
    }),
    ClientsModule.register([
      {
        name: "USER_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ["localhost:9092"],
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: "INVOICE_PACKAGE",
        transport: Transport.GRPC,
        options: {
          url: "0.0.0.0:44000",
          package: "invoice",
          protoPath: path.join(__dirname, "invoice.proto"),
        },
      },
    ]),
  ],
  providers: [
    AppResolver,
    {
      provide: APP_GUARD,
      useClass: GqlThrottlerGuard,
    },
  ],
})
export class AppModule {}
