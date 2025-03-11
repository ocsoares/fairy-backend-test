import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ProductModule } from "./modules/product/product.module";
import { PrismaDatabaseModule } from "./repositories/implementations/prisma/prisma-database.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ".env",
        }),
        PrismaDatabaseModule,
        ProductModule,
    ],
})
export class AppModule { }
