import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (money:number): void => {
    if (this.validateStatus()){
      this.setBalance(money)
      console.log('Voce pegou um empréstimo de : R$'+money+', agora sua conta tem : R$' +this.getBalance())
    }
  }
}
