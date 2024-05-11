import { Test, TestingModule } from '@nestjs/testing';
import { TasksStatusService } from './tasks_status.service';

describe('TasksStatusService', () => {
  let service: TasksStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksStatusService],
    }).compile();

    service = module.get<TasksStatusService>(TasksStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
