export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setBalance = (balance:number):void => {
    this.balance += balance
  }


  getName = (): string => {
    return this.name
  }
  
  getBalance = ():number => {
    return this.balance
  }

  deposit = (money : number): void => {
    if(this.validateStatus()){
      this.balance += money;
      console.log('Voce depositou: R$'+this.balance)
    }
  }

  withdraw = (money : number): void => {
    if(this.validateStatus() && this.balance > money){
      this.balance -= money;
      console.log('Voce Sacou R$'+money+' e agora tem R$'+this.balance)
    }else{
      console.log("Saque recusado, saldo insuficiente")
    }
  }


  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
