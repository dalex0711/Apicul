import { Module } from '@nestjs/common';
import { TaskCategoriesService } from './task_categories.service';
import { TaskCategoriesController } from './task_categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskCategory } from './entities/task_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskCategory])],
  controllers: [TaskCategoriesController],
  providers: [TaskCategoriesService],
})
export class TaskCategoriesModule {}
