import { Test, TestingModule } from '@nestjs/testing';
import { UpdateTaskByController } from './update-task-by.controller';

describe('UpdateTaskByController', () => {
  let controller: UpdateTaskByController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateTaskByController],
    }).compile();

    controller = module.get<UpdateTaskByController>(UpdateTaskByController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
