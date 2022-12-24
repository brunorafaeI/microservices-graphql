import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
export declare class AppController {
    getInvoiceById(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<{
        id: string;
        name: string;
        price: number;
    }>;
    create(data: any): Promise<void>;
}
