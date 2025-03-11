import { Global, Module } from "@nestjs/common";
import { ProductRepository } from "../../../repositories/abstracts/ProductRepository";
import { PrismaService } from "./prisma-client.service";
import { PrismaProductRepository } from "./product/PrismaProductRepository";

@Global()
@Module({
    providers: [
        PrismaService,

        {
            provide: ProductRepository,
            useClass: PrismaProductRepository,
        },

    ],
    exports: [ProductRepository],
})
export class PrismaDatabaseModule { }
