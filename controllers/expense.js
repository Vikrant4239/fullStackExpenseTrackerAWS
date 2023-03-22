
const Expense = require('../models/expense');

exports.addExpense = async (req, res, next)=> {
   
    try{   
   
    const price = req.body.price;
    const product = req.body.product;
    const selecting = req.body.selecting;
    
    const data = await Expense.create( {price: price, product: product, selecting: selecting} )
    res.status(201).json({newExpense: data});
    } catch(err){
       res.status(500).json({
          error: err
       })
       
    } 

}

exports.getExpense = async (req, res, next) => {
    try{
     const expenses = await Expense.findAll();
     res.status(200).json({allExpenses: expenses})
    } catch(error){
     console.log('Get expense is failing', JSON.stringify(error));
     res.status(500).json({error: err})
    }
}

exports.deleteExpense = async (req, res) => {
    const eId = req.params.id;
    try{
    if(req.params.id == 'undefined'){
       console.log('ID is missing');
      return res.status(400).json({err: 'ID is missing'})
    }
    await Expense.destroy({where: {id: eId}});
    res.sendStatus(200);
    } catch(err){
       console.log(err);
       res.status(500).json(err)
    }
}