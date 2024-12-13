import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'auth/auth.controller';
import { BankController } from 'Bank/bank.controller';
import { Bank } from 'Bank/bank.entity';
import { BankService } from 'Bank/bank.service';
import { UserController } from 'User/user.controller';
import { User } from 'User/user.entity';
import { UserService } from 'User/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'banking.db',
      synchronize: true,
      entities: [User, Bank],
    }),
    TypeOrmModule.forFeature([User, Bank]),
  ],
  controllers: [UserController, AuthController, BankController],
  providers: [UserService, BankService],
})
export class AppModule {}
