import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDTO {
  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  email: string;

  static cast(data: any): UserDTO {
    const user = new UserDTO();
    user.id = data.id;
    user.name = data.name;
    user.email = user.email;

    return user;
  }
}

export class CreateUserDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  email: string;
}
