import { Global, Module } from "@nestjs/common";
import { TaskRepository } from "src/repositories/abstracts/TaskRepository";
import { PrismaService } from "./prisma-client.service";
import { PrismaTaskRepository } from "./task/PrismaTaskRepository";

@Global()
@Module({
    providers: [
        PrismaService,
        {
            provide: TaskRepository,
            useClass: PrismaTaskRepository
        }

    ],
    exports: [TaskRepository],
})
export class PrismaDatabaseModule { }
