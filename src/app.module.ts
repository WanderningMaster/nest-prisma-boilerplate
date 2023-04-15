import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestModule } from './primary-adapters/rest/rest.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [CommonModule, RestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
