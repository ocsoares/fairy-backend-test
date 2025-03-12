import { Test, TestingModule } from '@nestjs/testing';
import { ListTaskByController } from './list-task-by.controller';

describe('ListTaskByController', () => {
  let controller: ListTaskByController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListTaskByController],
    }).compile();

    controller = module.get<ListTaskByController>(ListTaskByController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
