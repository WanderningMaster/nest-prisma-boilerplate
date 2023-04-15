import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { TokenTypes } from 'src/common/consts/token-types';
import { CreateUserDTO } from 'src/common/types/user/user.types';
import { UserService } from 'src/core/user/application/user.service';

@Controller('/user')
export class UserController {
  constructor(
    @Inject(TokenTypes.USER_SERVICE)
    private readonly userService: UserService,
  ) {}

  @Post('/')
  public async createUser(@Body() payload: CreateUserDTO) {
    await this.userService.createUser(payload);

    return 'Created';
  }

  @Get('/')
  public async getAll() {
    const users = await this.userService.getAll();

    return users;
  }

  @Get('/:id')
  public async getById(@Param('id') id: string) {
    const user = await this.userService.getById(Number(id));
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    return user;
  }
}
