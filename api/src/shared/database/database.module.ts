import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { CategoriesRepository } from './repositories/categories.repository';
import { BankAccounRepository } from './repositories/bank-accounts.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccounRepository,
  ],
  exports: [UsersRepository, CategoriesRepository, BankAccounRepository],
})
export class DatabaseModule {}
