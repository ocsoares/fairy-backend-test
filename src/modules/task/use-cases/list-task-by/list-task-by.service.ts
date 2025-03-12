import { Injectable } from '@nestjs/common';
import { TaskNotFoundByIdException } from 'src/exceptions/task/task-not-found-by-id.exception';
import { TaskRepository } from 'src/repositories/abstracts/TaskRepository';
import { TaskMapper } from '../../mappers/TaskMapper';
import { TaskResponse } from '../../responses/TaskResponse';

@Injectable()
export class ListTaskByService {
    constructor(
        private readonly taskRepository: TaskRepository,
        private readonly taskMapper: TaskMapper
    ) { }

    async execute(id: number): Promise<TaskResponse> {
        const taskFound = await this.taskRepository.findById(id);

        if (!taskFound) {
            throw new TaskNotFoundByIdException();
        }

        return this.taskMapper.toResponse(taskFound);
    }
}
