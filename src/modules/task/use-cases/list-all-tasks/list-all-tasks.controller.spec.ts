import { Test, TestingModule } from '@nestjs/testing';
import { ListAllTasksController } from './list-all-tasks.controller';

describe('ListAllTasksController', () => {
  let controller: ListAllTasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListAllTasksController],
    }).compile();

    controller = module.get<ListAllTasksController>(ListAllTasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
