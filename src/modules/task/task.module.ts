import { Module } from '@nestjs/common';
import { TaskMapper } from './mappers/TaskMapper';
import { CreateTaskController } from './use-cases/create-task/create-task.controller';
import { CreateTaskService } from './use-cases/create-task/create-task.service';
import { ListTaskByService } from './use-cases/list-task-by/list-task-by.service';
import { ListTaskByController } from './use-cases/list-task-by/list-task-by.controller';
import { ListAllTasksService } from './use-cases/list-all-tasks/list-all-tasks.service';
import { ListAllTasksController } from './use-cases/list-all-tasks/list-all-tasks.controller';
import { UpdateTaskByService } from './use-cases/update-task-by/update-task-by.service';
import { UpdateTaskByController } from './use-cases/update-task-by/update-task-by.controller';
import { DeleteTaskByService } from './use-cases/delete-task-by/delete-task-by.service';
import { DeleteTaskByController } from './use-cases/delete-task-by/delete-task-by.controller';

@Module({
  providers: [CreateTaskService, TaskMapper, ListTaskByService, ListAllTasksService, UpdateTaskByService, DeleteTaskByService],
  controllers: [CreateTaskController, ListTaskByController, ListAllTasksController, UpdateTaskByController, DeleteTaskByController]
})
export class TaskModule { }
