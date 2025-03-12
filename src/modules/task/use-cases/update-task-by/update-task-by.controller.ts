import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TaskResponse } from '../../responses/TaskResponse';
import { UpdateTaskDTO } from './dtos/UpdateTaskDTO';
import { UpdateTaskByService } from './update-task-by.service';

@Controller()
export class UpdateTaskByController {
    constructor(private readonly updateTaskByService: UpdateTaskByService) { }

    @ApiTags("tasks")
    @ApiBadRequestResponse()
    @ApiNotFoundResponse()
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Patch("task/:id")
    async handle(@Param("id", ParseIntPipe) id: number, @Body() body: UpdateTaskDTO): Promise<TaskResponse> {
        return await this.updateTaskByService.execute(id, body);
    }
}
