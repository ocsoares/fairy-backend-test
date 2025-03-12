import { Controller, Delete, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { DeleteTaskByService } from './delete-task-by.service';

@Controller()
export class DeleteTaskByController {
    constructor(private readonly deleteTaskByService: DeleteTaskByService) { }

    @ApiTags("tasks")
    @ApiNotFoundResponse()
    @ApiNoContentResponse()
    @ApiInternalServerErrorResponse()
    @HttpCode(204)
    @Delete("task/:id")
    async handle(@Param("id", ParseIntPipe) id: number): Promise<void> {
        return await this.deleteTaskByService.execute(id);
    }
}
