import { Controller, Get } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller({
  path: "user",
})
export class AppController {
  @Get()
  async findById() {
    return {
      name: "user",
    };
  }

  @MessagePattern("user.create")
  create(@Payload() data: any) {
    console.log(data);
    return null;
  }
}
