import { Test, TestingModule } from '@nestjs/testing';
import { ListAllTasksService } from './list-all-tasks.service';

describe('ListAllTasksService', () => {
  let service: ListAllTasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllTasksService],
    }).compile();

    service = module.get<ListAllTasksService>(ListAllTasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
