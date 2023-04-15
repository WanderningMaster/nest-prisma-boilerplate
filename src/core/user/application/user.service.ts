import { Inject, Injectable } from '@nestjs/common';
import { TokenTypes } from 'src/common/consts/token-types';
import { UserRepository } from '../port/user.repository';
import { CreateUserDTO } from 'src/common/types/user/user.types';

@Injectable()
export class UserService {
  constructor(
    @Inject(TokenTypes.USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(payload: CreateUserDTO) {
    await this.userRepository.createUser(payload);
  }

  async getAll() {
    return await this.userRepository.getAll();
  }

  async getById(id: number) {
    return await this.userRepository.getById(id);
  }
}
