import { Module } from '@nestjs/common';
import { TasksStatusService } from './tasks_status.service';
import { TasksStatusController } from './tasks_status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksStatus } from './entities/tasks_status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TasksStatus])],
  controllers: [TasksStatusController],
  providers: [TasksStatusService],
})
export class TasksStatusModule {}
