import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount{

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (money:number) =>{
    if (this.validateStatus()){
      this.setBalance(money+10);
      console.log('Voce depositou com bonus, valor total depositado: R$'+this.getBalance()); 
    }
  }
}