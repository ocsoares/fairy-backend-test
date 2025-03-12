import { IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTaskDTO {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString()
    readonly description?: string | null;

    @IsNotEmpty()
    @IsIn(["pending", "in_progress", "completed"])
    readonly status: "pending" | "in_progress" | "completed" = "pending";
}