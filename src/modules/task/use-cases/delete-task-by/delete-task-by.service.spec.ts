import { Test, TestingModule } from '@nestjs/testing';
import { DeleteTaskByService } from './delete-task-by.service';

describe('DeleteTaskByService', () => {
  let service: DeleteTaskByService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteTaskByService],
    }).compile();

    service = module.get<DeleteTaskByService>(DeleteTaskByService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
