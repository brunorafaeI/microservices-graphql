import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
import { Controller, Get, Post } from "@nestjs/common";
import { GrpcMethod, MessagePattern, Payload } from "@nestjs/microservices";
import { randomUUID } from "crypto";

@Controller({
  path: "invoice",
})
export class AppController {
  @GrpcMethod("InvoiceService", "getInvoiceById")
  async getInvoiceById(
    data: any,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>
  ) {
    const authorizatiuon = metadata.get("authorization");
    console.log(authorizatiuon);

    return {
      id: "1000",
      name: "2000",
      price: 3000,
    };
  }

  @MessagePattern("invoice.create")
  async create(@Payload() data: any) {
    const body = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    console.log(body);
  }
}
