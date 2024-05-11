import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    email: string
    @IsNotEmpty()
    firstName : string
    @IsNotEmpty()
    lastName : string
    @IsNotEmpty()
    phoneNumber : string
}
 