import { Test, TestingModule } from '@nestjs/testing';
import { UpdateTaskByService } from './update-task-by.service';

describe('UpdateTaskByService', () => {
  let service: UpdateTaskByService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateTaskByService],
    }).compile();

    service = module.get<UpdateTaskByService>(UpdateTaskByService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
