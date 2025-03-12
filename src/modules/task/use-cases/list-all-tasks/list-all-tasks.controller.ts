import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { TaskResponse } from '../../responses/TaskResponse';
import { ListAllTasksService } from './list-all-tasks.service';

@Controller()
export class ListAllTasksController {
    constructor(private readonly listAllTasksService: ListAllTasksService) { }

    @Get("task")
    async handle(
        @Query("page", ParseIntPipe) page = 1,
        @Query("limit", ParseIntPipe) limit = 10
    ): Promise<TaskResponse[]> {
        return this.listAllTasksService.execute(page, limit);
    }
}
