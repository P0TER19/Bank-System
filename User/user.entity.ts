import { Bank } from 'Bank/bank.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column('decimal', { default: 0 })
  balance: number;

  @ManyToOne(() => Bank, (bank) => bank.users)
  bank: Bank;
}
