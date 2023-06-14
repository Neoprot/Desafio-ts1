import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'kaua',10);
peopleAccount.withdraw(10);
peopleAccount.deposit(100);
peopleAccount.deposit(100);
peopleAccount.withdraw(100);
const specialAccount: SpecialAccount= new SpecialAccount('kaua',10);
specialAccount.deposit(100);
specialAccount.deposit(100);
const companyAccount: CompanyAccount = new CompanyAccount('Kaua', 20);
companyAccount.getLoan(1200);
companyAccount.getLoan(1200);