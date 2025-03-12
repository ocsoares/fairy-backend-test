import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTaskDTO {
    @ApiProperty({ type: "string", example: "Corrigir bugs" })
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @ApiProperty({ type: "string", example: "Essa é uma task para corrigir bugs !" })
    @IsOptional()
    @IsString()
    readonly description?: string | null;

    @ApiProperty({ type: "string", example: "in_progress" })
    @IsNotEmpty()
    @IsIn(["pending", "in_progress", "completed"])
    readonly status: "pending" | "in_progress" | "completed" = "pending";
}