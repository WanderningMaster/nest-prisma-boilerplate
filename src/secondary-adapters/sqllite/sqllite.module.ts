import { Module } from '@nestjs/common';
import { TokenTypes } from 'src/common/consts/token-types';
import { PrismaService } from './prisma.service';
import { UserRepositoryAdapter } from './user/user.repository-adapter';

@Module({
  providers: [
    {
      provide: TokenTypes.PRISMA_SERVICE,
      useClass: PrismaService,
    },
    {
      provide: TokenTypes.USER_REPOSITORY,
      useClass: UserRepositoryAdapter,
    },
  ],
  exports: [TokenTypes.USER_REPOSITORY, TokenTypes.PRISMA_SERVICE],
})
export class SqlliteModule {}
