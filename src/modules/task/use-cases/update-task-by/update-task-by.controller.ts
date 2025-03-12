import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { UpdateTaskDTO } from './dtos/UpdateTaskDTO';
import { UpdateTaskByService } from './update-task-by.service';

@Controller()
export class UpdateTaskByController {
    constructor(private readonly updateTaskByService: UpdateTaskByService) { }

    @Patch("task/:id")
    async handle(@Param("id", ParseIntPipe) id: number, @Body() body: UpdateTaskDTO) {
        return await this.updateTaskByService.execute(id, body);
    }
}
