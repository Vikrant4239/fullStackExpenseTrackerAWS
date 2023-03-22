
const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();

router.post('/user/addExpense', expenseController.addExpense);
  
router.get('/user/getExpense', expenseController.getExpense);
 
router.delete('/user/deleteExpense/:id', expenseController.deleteExpense);
 

module.exports = router;