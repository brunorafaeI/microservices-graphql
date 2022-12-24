import { ClientGrpc, ClientKafka } from "@nestjs/microservices";
export declare class Queue {
    topicName: string;
    partition: number;
    errorCode: number;
    baseOffset: string;
    logAppendTime: string;
    logStartOffset: string;
}
export declare class Welcome {
    id: string;
    name: string;
    price: number;
}
export declare class AppResolver {
    private readonly client;
    private readonly invoice;
    private invoiceService;
    constructor(client: ClientKafka, invoice: ClientGrpc);
    onModuleInit(): void;
    wellcome(ctx: any): Promise<Welcome>;
    create(): Promise<string>;
    userBanned(): string;
    createInvoice(): Promise<any>;
    createUser(): Promise<AsyncIterator<unknown, any, undefined>>;
    userBannedSubscription(): Promise<AsyncIterator<unknown, any, undefined>>;
}
