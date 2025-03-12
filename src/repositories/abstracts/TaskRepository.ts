import { TaskEntity } from "src/entity/TaskEntity";
import { CreateTaskDTO } from "src/modules/task/use-cases/create-task/dtos/CreateTaskDTO";
import { UpdateTaskDTO } from "src/modules/task/use-cases/update-task-by/dtos/UpdateTaskDTO";

export abstract class TaskRepository {
    abstract create(data: CreateTaskDTO): Promise<TaskEntity>;
    abstract findById(id: number): Promise<TaskEntity | null>;
    abstract findAll(page: number, limit: number): Promise<TaskEntity[]>;
    abstract updateById(id: number, data: UpdateTaskDTO): Promise<TaskEntity>;
}