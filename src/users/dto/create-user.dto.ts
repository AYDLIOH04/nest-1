import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {

  @ApiProperty({example: 'user@mail.ru', description: "Почтовый адрес"})
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: "Некорректный email"})
  readonly email: string;

  @ApiProperty({example: 'MyVeryVeryBig15Password', description: "Пароль"})
  @IsString({message: 'Должно быть строкой'})
  @Length(4, 16, {message: "Должно быть от 4 до 16 символов в пароле"})
  readonly password: string;
}