import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty } from "class-validator";

export class UpdateTaskDTO {
    @ApiProperty({ type: "string", example: "in_progress" })
    @IsNotEmpty()
    @IsIn(["pending", "in_progress", "completed"])
    readonly status: "pending" | "in_progress" | "completed" = "pending";
}