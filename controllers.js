
const BankModel=require('./model');



//request handlers/controlllers
const listBanksController=(req,res)=>{
    //list all banks
    const banks=BankModel.all();
    res.json({data:banks})
   }
  
   const createBankController=(req,res)=>{
      //create a bank
      const{name,location,branch,phone,address,accountNumber}=req.body;

       const bank= new BankModel({name,location,branch,phone,address,accountNumber});

       bank.save();

       res.json({message:"created successfully", data:bank});
   }
  
   const updateBankController=(req,res)=>{
      //update a bank
      const{name,location,branch,phone,address,accountNumber}=req.body;

      const updatedBank=  BankModel.update({name,location,branch,phone,address,accountNumber});
      
      
      res.json({message:"updated successfully", data:updatedBank});

   }
  
   const deleteBankController=(req,res)=>{
      //delete a bank

      const {name}=req.body;

      const deletedBank= BankModel.delete({name});

      res.json({message:"deleted successfully", data:deletedBank})
   }

   module.exports = {
    listBanksController,
    createBankController,
    updateBankController,
    deleteBankController,
   }

