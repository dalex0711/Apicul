import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskCategoryDto } from './create-task_category.dto';

export class UpdateTaskCategoryDto extends PartialType(CreateTaskCategoryDto) {}
