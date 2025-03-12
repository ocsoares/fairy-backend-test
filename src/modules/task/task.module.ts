import { Module } from '@nestjs/common';
import { TaskMapper } from './mappers/TaskMapper';
import { CreateTaskController } from './use-cases/create-task/create-task.controller';
import { CreateTaskService } from './use-cases/create-task/create-task.service';
import { ListTaskByService } from './use-cases/list-task-by/list-task-by.service';
import { ListTaskByController } from './use-cases/list-task-by/list-task-by.controller';

@Module({
  providers: [CreateTaskService, TaskMapper, ListTaskByService],
  controllers: [CreateTaskController, ListTaskByController]
})
export class TaskModule { }
