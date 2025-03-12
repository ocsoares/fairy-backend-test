import { Injectable } from '@nestjs/common';
import { TaskNotFoundByIdException } from 'src/exceptions/task/task-not-found-by-id.exception';
import { TaskRepository } from 'src/repositories/abstracts/TaskRepository';

@Injectable()
export class DeleteTaskByService {
    constructor(private readonly taskRepository: TaskRepository) { }

    async execute(id: number): Promise<void> {
        const taskFound = await this.taskRepository.findById(id);

        if (!taskFound) {
            throw new TaskNotFoundByIdException();
        }

        return await this.taskRepository.deleteById(id);
    }
}
