import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksStatusService } from './tasks_status.service';
import { CreateTasksStatusDto } from './dto/create-tasks_status.dto';
import { UpdateTasksStatusDto } from './dto/update-tasks_status.dto';

@Controller('TasksStatus')
export class TasksStatusController {
  constructor(private readonly tasksStatusService: TasksStatusService) {}

  @Post()
  create(@Body() createTasksStatusDto: CreateTasksStatusDto) {
    return this.tasksStatusService.create(createTasksStatusDto);
  }

  @Get()
  findAll() {
    return this.tasksStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTasksStatusDto: UpdateTasksStatusDto) {
    return this.tasksStatusService.update(+id, updateTasksStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksStatusService.remove(+id);
  }
}
