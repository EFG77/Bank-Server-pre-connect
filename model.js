
let banksDb= require('./db');

//BankModel
class BankModel{
    constructor({name,location,branch,phone,address,accountNumber}){
        this.name=name;
        this.location=location;
        this.branch=branch;
        this.phone=phone;
        this.address=address;
        this.accountNumber=accountNumber;
    }

     save(){
     banksDb.push(this);
     return this;

        
    }

    static all(){
      return banksDb;
    }

    static update(updateInfo={}){
     var current_bank = null
    banksDb = banksDb.map( bank=>{
        if (bank.name===updateInfo.name){
            var new_bank_info =  {...bank, ...updateInfo};
          current_bank  = new_bank_info
            return new_bank_info
        }
        return bank;
    })

    return current_bank;
    

    } 
    
  static delete({name}){
    let deletedBank=null;
    banksDb= banksDb.filter(bank=>{
        if (bank.name!==name){
            return true;
        }
        deletedBank=bank
        return false;
    })
    return deletedBank;
  }

}

module.exports= BankModel;
