import { Module } from '@nestjs/common';
import { TaskMapper } from './mappers/TaskMapper';
import { CreateTaskController } from './use-cases/create-task/create-task.controller';
import { CreateTaskService } from './use-cases/create-task/create-task.service';

@Module({
  providers: [CreateTaskService, TaskMapper],
  controllers: [CreateTaskController]
})
export class TaskModule { }
