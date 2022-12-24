"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AppController = class AppController {
    async getInvoiceById(data, metadata, call) {
        const authorizatiuon = metadata.get("authorization");
        console.log(authorizatiuon);
        return {
            id: "1000",
            name: "2000",
            price: 3000,
        };
    }
    async create(data) {
        const body = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
        console.log(body);
    }
};
__decorate([
    (0, microservices_1.GrpcMethod)("InvoiceService", "getInvoiceById"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, grpc_js_1.Metadata, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getInvoiceById", null);
__decorate([
    (0, microservices_1.MessagePattern)("invoice.create"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
AppController = __decorate([
    (0, common_1.Controller)({
        path: "invoice",
    })
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map