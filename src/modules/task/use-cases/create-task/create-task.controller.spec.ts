import { Test, TestingModule } from '@nestjs/testing';
import { CreateTaskController } from './create-task.controller';

describe('CreateTaskController', () => {
  let controller: CreateTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateTaskController],
    }).compile();

    controller = module.get<CreateTaskController>(CreateTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
