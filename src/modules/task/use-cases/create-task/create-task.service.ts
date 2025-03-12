import { Injectable } from '@nestjs/common';
import { TaskRepository } from 'src/repositories/abstracts/TaskRepository';
import { TaskMapper } from '../../mappers/TaskMapper';
import { TaskResponse } from '../../responses/TaskResponse';
import { CreateTaskDTO } from './dtos/CreateTaskDTO';

@Injectable()
export class CreateTaskService {
    constructor(
        private readonly taskRepository: TaskRepository,
        private readonly taskMapper: TaskMapper
    ) { }

    async execute(data: CreateTaskDTO): Promise<TaskResponse> {
        const createdTask = await this.taskRepository.create(data);

        return this.taskMapper.toResponse(createdTask);
    }
}
