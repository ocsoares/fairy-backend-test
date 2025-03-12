import { TaskEntity } from "src/entity/TaskEntity";
import { TaskResponse } from "../responses/TaskResponse";

export class TaskMapper {
    toResponse({ title, description, status }: TaskEntity): TaskResponse {
        return new TaskResponse(title, description, status);
    }
}