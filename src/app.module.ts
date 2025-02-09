import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/Services/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [AppService, UserService], // nem todos os provides são services
})

export class AppModule {}
