import { PartialType } from '@nestjs/mapped-types';
import { CreateTasksStatusDto } from './create-tasks_status.dto';

export class UpdateTasksStatusDto extends PartialType(CreateTasksStatusDto) {}
