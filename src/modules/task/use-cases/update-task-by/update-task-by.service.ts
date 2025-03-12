import { Injectable } from '@nestjs/common';
import { TaskNotFoundByIdException } from 'src/exceptions/task/task-not-found-by-id.exception';
import { TaskRepository } from 'src/repositories/abstracts/TaskRepository';
import { TaskMapper } from '../../mappers/TaskMapper';
import { TaskResponse } from '../../responses/TaskResponse';
import { UpdateTaskDTO } from './dtos/UpdateTaskDTO';

@Injectable()
export class UpdateTaskByService {
    constructor(
        private readonly taskRepository: TaskRepository,
        private readonly taskMapper: TaskMapper
    ) { }

    async execute(id: number, data: UpdateTaskDTO): Promise<TaskResponse> {
        const taskExistsById = await this.taskRepository.findById(id);

        if (!taskExistsById) {
            throw new TaskNotFoundByIdException();
        }

        const taskUpdated = await this.taskRepository.updateById(id, data);

        return this.taskMapper.toResponse(taskUpdated);
    }
}
