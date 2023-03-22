const User = require('../models/user');
const bcrypt = require('bcrypt');

function isstringinvalid(string){
    if(string == undefined || string.length === 0){
         return true
    }
    else{
        return false
    }
}

exports.signup= async(req, res, next) => {
    try{
        const {name, email, password} = req.body;
        if (isstringinvalid(name) || isstringinvalid(email) || isstringinvalid(password)){
            return res.status(400).json({err: "something is missing!!"})
        }
        const saltrounds=10;
        bcrypt.hash(password,saltrounds,async(err,hash)=>{
            console.log(err);
            await User.create({name, email, password:hash})
            res.status(201).json({message: "successfully created new user"})
        })
           
         
        
    }catch(err) {
        res.status(500).json(err);
    }
}
exports.login= async(req, res, next) => {
    try{
        const {email, password} = req.body;
        if (isstringinvalid(email) || isstringinvalid(password)){
            return res.status(400).json({err: "something is missing!!"})
        }
        console.log(password);
        const saltrounds=10;
        const user = await User.findAll({where:{email}})
            if(user.length>0){
                bcrypt.compare(password,user[0].password,(err,result)=>{
                    if(err){
                        req.status(500).json({success:false,message:"something went wrong"})
                    }
                    if(result===true){
                        
                        res.status(200).json({success:true,message:"User logged in successfully"})
                        
                    }
                    else{
                       return  res.status(400).json({success:false,message:"password is incorrect"})
                    }
                })
            }
            else{
                res.status(404).json({success:false,message:"user Does not exists"})
            }

        
            
           
         
        
    }catch(err) {
        res.status(500).json(err);
    }
}
