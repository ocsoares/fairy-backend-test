import { Test, TestingModule } from '@nestjs/testing';
import { DeleteTaskByController } from './delete-task-by.controller';

describe('DeleteTaskByController', () => {
  let controller: DeleteTaskByController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteTaskByController],
    }).compile();

    controller = module.get<DeleteTaskByController>(DeleteTaskByController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
