import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TasksModule } from './tasks/tasks.module';
import { TaskCategoriesModule } from './task_categories/task_categories.module';
import { TaskCategory } from './task_categories/entities/task_category.entity';
import { Task } from './tasks/entities/task.entity';
import { TasksStatusModule } from './tasks_status/tasks_status.module';
import { TasksStatus } from './tasks_status/entities/tasks_status.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'SANJUAN2023.',
    database: 'apicul',
    entities: [User,TaskCategory,Task,TasksStatus],
    synchronize: true,
  }),
    UserModule,
    TasksModule,
    TaskCategoriesModule,
    TasksStatusModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
