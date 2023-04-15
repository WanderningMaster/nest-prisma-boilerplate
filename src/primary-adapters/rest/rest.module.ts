import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserModule } from 'src/core/user/user.module';
import { TokenTypes } from 'src/common/consts/token-types';
import { UserService } from 'src/core/user/application/user.service';

@Module({
  imports: [UserModule],
  providers: [
    {
      provide: TokenTypes.USER_SERVICE,
      useFactory: (service) => new UserService(service),
      inject: [TokenTypes.USER_REPOSITORY],
    },
  ],
  controllers: [UserController],
})
export class RestModule {}
