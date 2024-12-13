import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { UserService } from 'User/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body('name') name: string, @Body('password') password: string) {
    const user = await this.userService.authenticate(name, password);
    if (user) {
      return { message: 'Login successful', user };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}
