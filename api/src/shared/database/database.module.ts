import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { CategoriesRepository } from './repositories/categories.repository';
import { BankAccountRepository } from './repositories/bank-accounts.repository';
import { TransactionsRepository } from './repositories/transactions.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountRepository,
    TransactionsRepository,
  ],
  exports: [
    UsersRepository,
    CategoriesRepository,
    BankAccountRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
