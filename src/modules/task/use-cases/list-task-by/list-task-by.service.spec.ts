import { Test, TestingModule } from '@nestjs/testing';
import { ListTaskByService } from './list-task-by.service';

describe('ListTaskByService', () => {
  let service: ListTaskByService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListTaskByService],
    }).compile();

    service = module.get<ListTaskByService>(ListTaskByService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
