import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserService } from 'User/user.service';

@Module({
  controllers: [AuthController],
  providers: [UserService],
})
export class AuthModule {}
