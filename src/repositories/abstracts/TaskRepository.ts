import { TaskEntity } from "src/entity/TaskEntity";
import { CreateTaskDTO } from "src/modules/task/use-cases/create-task/dtos/CreateTaskDTO";

export abstract class TaskRepository {
    abstract create(data: CreateTaskDTO): Promise<TaskEntity>;
    abstract findById(id: number): Promise<TaskEntity | null>;
}