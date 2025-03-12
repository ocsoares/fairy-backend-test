import { Injectable } from '@nestjs/common';
import { TaskRepository } from 'src/repositories/abstracts/TaskRepository';
import { TaskMapper } from '../../mappers/TaskMapper';
import { TaskResponse } from '../../responses/TaskResponse';

@Injectable()
export class ListAllTasksService {
    constructor(
        private readonly taskRepository: TaskRepository,
        private readonly taskMapper: TaskMapper
    ) { }

    async execute(page: number, limit: number): Promise<TaskResponse[]> {
        const foundAllTasks = await this.taskRepository.findAll(page, limit);

        return this.taskMapper.toResponseArray(foundAllTasks);
    }
}
