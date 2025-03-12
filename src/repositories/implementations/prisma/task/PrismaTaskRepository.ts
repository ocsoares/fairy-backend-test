import { Injectable } from "@nestjs/common";
import { TaskEntity } from "src/entity/TaskEntity";
import { CreateTaskDTO } from "src/modules/task/use-cases/create-task/dtos/CreateTaskDTO";
import { UpdateTaskDTO } from "src/modules/task/use-cases/update-task-by/dtos/UpdateTaskDTO";
import { TaskRepository } from "src/repositories/abstracts/TaskRepository";
import { PrismaService } from "../prisma-client.service";

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
    constructor(private readonly prismaService: PrismaService) { }

    async create(data: CreateTaskDTO): Promise<TaskEntity> {
        return await this.prismaService.task.create({
            data: { ...data }
        });
    }

    async findById(id: number): Promise<TaskEntity | null> {
        return await this.prismaService.task.findUnique({ where: { id } });
    }

    async findAll(page: number, limit: number): Promise<TaskEntity[]> {
        return await this.prismaService.task.findMany({
            skip: (page - 1) * limit,
            take: limit
        });
    }

    async updateById(id: number, data: UpdateTaskDTO): Promise<TaskEntity> {
        return await this.prismaService.task.update({ where: { id }, data: { ...data } });
    }

    async deleteById(id: number): Promise<void> {
        await this.prismaService.task.delete({ where: { id } });
    }
}
