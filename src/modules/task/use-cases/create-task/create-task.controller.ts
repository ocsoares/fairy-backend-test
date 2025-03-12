import { Body, Controller, Post } from '@nestjs/common';
import { TaskResponse } from '../../responses/TaskResponse';
import { CreateTaskService } from './create-task.service';
import { CreateTaskDTO } from './dtos/CreateTaskDTO';

@Controller()
export class CreateTaskController {
    constructor(private readonly createTaskService: CreateTaskService) { }

    @Post("task")
    async handle(@Body() body: CreateTaskDTO): Promise<TaskResponse> {
        return this.createTaskService.execute(body);
    }
}
