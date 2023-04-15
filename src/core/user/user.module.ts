import { Module } from '@nestjs/common';
import { TokenTypes } from 'src/common/consts/token-types';
import { UserService } from './application/user.service';
import { SqlliteModule } from 'src/secondary-adapters/sqllite/sqllite.module';
import { UserRepositoryAdapter } from 'src/secondary-adapters/sqllite/user/user.repository-adapter';

@Module({
  imports: [SqlliteModule],
  providers: [
    {
      provide: TokenTypes.USER_SERVICE,
      useClass: UserService,
    },
    {
      provide: TokenTypes.USER_REPOSITORY,
      useFactory: (service) => new UserRepositoryAdapter(service),
      inject: [TokenTypes.PRISMA_SERVICE],
    },
  ],
  exports: [TokenTypes.USER_SERVICE, TokenTypes.USER_REPOSITORY],
})
export class UserModule {}
