import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async addUser(name: string, password: string, bankId: number): Promise<User> {
    const user = this.userRepository.create({ name, password, balance: 0, bank: { id: bankId } });
    return this.userRepository.save(user);
  }

  async findUser(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id }, relations: ['bank'] });
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async deposit(id: number, amount: number): Promise<User | null> {
    const user = await this.findUser(id);
    if (!user) return null;
    user.balance += amount;
    return this.userRepository.save(user);
  }

  async withdraw(id: number, amount: number): Promise<User | null> {
    const user = await this.findUser(id);
    if (!user || user.balance < amount) return null;
    user.balance -= amount;
    return this.userRepository.save(user);
  }

  async authenticate(name: string, password: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { name, password } });
  }
}
