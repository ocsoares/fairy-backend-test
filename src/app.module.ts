import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TaskModule } from './modules/task/task.module';
import { PrismaDatabaseModule } from "./repositories/implementations/prisma/prisma-database.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ".env",
        }),
        PrismaDatabaseModule,
        TaskModule,
    ],
})
export class AppModule { }
