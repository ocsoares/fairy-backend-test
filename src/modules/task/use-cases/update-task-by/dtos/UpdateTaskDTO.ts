import { IsIn, IsNotEmpty } from "class-validator";

export class UpdateTaskDTO {
    @IsNotEmpty()
    @IsIn(["pending", "in_progress", "completed"])
    readonly status: "pending" | "in_progress" | "completed" = "pending";
}