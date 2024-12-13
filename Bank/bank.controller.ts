import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { BankService } from './bank.service';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post('create')
  createBank(@Body('name') name: string) {
    return this.bankService.createBank(name);
  }

  @Get(':id')
  findBank(@Param('id') id: number) {
    return this.bankService.findBank(id);
  }

  @Delete(':id')
  deleteBank(@Param('id') id: number) {
    return this.bankService.deleteBank(id);
  }
}
