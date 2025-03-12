import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { TaskResponse } from '../../responses/TaskResponse';
import { ListAllTasksService } from './list-all-tasks.service';

@Controller()
export class ListAllTasksController {
    constructor(private readonly listAllTasksService: ListAllTasksService) { }

    @ApiTags("tasks")
    @ApiBadRequestResponse()
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @ApiQuery({ name: "limit", required: false, example: 10 })
    @ApiQuery({ name: "page", required: false, example: 1 })
    @Get("task")
    async handle(
        @Query("page", ParseIntPipe) page = 1,
        @Query("limit", ParseIntPipe) limit = 10
    ): Promise<TaskResponse[]> {
        return this.listAllTasksService.execute(page, limit);
    }
}
