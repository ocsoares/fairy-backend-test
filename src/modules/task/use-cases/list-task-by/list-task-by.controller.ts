import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TaskResponse } from '../../responses/TaskResponse';
import { ListTaskByService } from './list-task-by.service';

@Controller()
export class ListTaskByController {
    constructor(private readonly listTaskByService: ListTaskByService) { }

    // Usei "ParseIntPipe" porque o NestJS pega os Parâmetros como STRING, e como no Prisma espera um NUMBER,
    // estava dando ERRO !  
    @Get("task/:id")
    async handle(@Param("id", ParseIntPipe) id: number): Promise<TaskResponse> {
        return this.listTaskByService.execute(id);
    }
}
