import { Test, TestingModule } from '@nestjs/testing';
import { TaskCategoriesController } from './task_categories.controller';
import { TaskCategoriesService } from './task_categories.service';

describe('TaskCategoriesController', () => {
  let controller: TaskCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskCategoriesController],
      providers: [TaskCategoriesService],
    }).compile();

    controller = module.get<TaskCategoriesController>(TaskCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
