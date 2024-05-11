import { IsNotEmpty } from "class-validator";

export class CreateTasksStatusDto {
    @IsNotEmpty()
    description : string
}
