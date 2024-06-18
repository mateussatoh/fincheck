import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountRepository } from 'src/shared/database/repositories/bank-accounts.repository';

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(private readonly bankAccountsRepo: BankAccountRepository) {}

  async execute(userId: string, bankAccountId: string) {
    const isOwner = await this.bankAccountsRepo.findFirst({
      where: { userId, id: bankAccountId },
    });

    if (!isOwner) {
      throw new NotFoundException('Bank account not found.');
    }
  }
}
