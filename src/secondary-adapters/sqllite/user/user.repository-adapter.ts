import { Inject, Injectable } from '@nestjs/common';
import { TokenTypes } from 'src/common/consts/token-types';
import { UserDTO, CreateUserDTO } from 'src/common/types/user/user.types';
import { UserRepository } from 'src/core/user/port/user.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserRepositoryAdapter implements UserRepository {
  constructor(
    @Inject(TokenTypes.PRISMA_SERVICE)
    private readonly prismaService: PrismaService,
  ) {}

  async getAll(): Promise<UserDTO[]> {
    return await this.prismaService.user.findMany();
  }
  async getById(id: number): Promise<UserDTO | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return null;
    }

    return user;
  }
  async createUser(payload: CreateUserDTO): Promise<void> {
    await this.prismaService.user.create({
      data: payload,
    });
  }
}
