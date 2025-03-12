import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { DeleteTaskByService } from './delete-task-by.service';

@Controller()
export class DeleteTaskByController {
    constructor(private readonly deleteTaskByService: DeleteTaskByService) { }

    @Delete("task/:id")
    async handle(@Param("id", ParseIntPipe) id: number): Promise<void> {
        return await this.deleteTaskByService.execute(id);
    }
}
