import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  addUser(@Body('name') name: string, @Body('password') password: string, @Body('bankId') bankId: number) {
    return this.userService.addUser(name, password, bankId);
  }

  @Get(':id')
  findUser(@Param('id') id: number) {
    return this.userService.findUser(id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }

  @Post('deposit')
  deposit(@Body('id') id: number, @Body('amount') amount: number) {
    return this.userService.deposit(id, amount);
  }

  @Post('withdraw')
  withdraw(@Body('id') id: number, @Body('amount') amount: number) {
    return this.userService.withdraw(id, amount);
  }
}
