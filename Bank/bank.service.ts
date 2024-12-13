import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from './bank.entity';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private readonly bankRepository: Repository<Bank>,
  ) {}

  async createBank(name: string): Promise<Bank> {
    const bank = this.bankRepository.create({ name });
    return this.bankRepository.save(bank);
  }

  async findBank(id: number): Promise<Bank | null> {
    return this.bankRepository.findOne({ where: { id }, relations: ['users'] });
  }
  async deleteBank(id: number): Promise<void> {
    await this.bankRepository.delete(id);
  }
}
