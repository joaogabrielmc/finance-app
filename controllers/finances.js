const Transaction = require('../models/Transaction')

module.exports = {
    getfinance: async (req, res) => {
        try {
            const TransactionItems = await Transaction.find({ userId: req.user.id })
            const amount = TransactionItems.reduce((previous, el) => {
                return previous + el.value;
            }, 0);
            res.render('finance.ejs', { finance: TransactionItems, amount: amount, user: req.user, userName: req.user.userName })
        } catch (err) {
            console.log(err)
        }
    },
    createTransaction: async (req, res) => {
        try {
            let value = 0;
            if(req.body.type === "Despesa"){
                value = req.body.valueItem * -1
            }else{
                value = req.body.valueItem
            }
            await Transaction.create({ transaction: req.body.nameItem, value: value, type: req.body.type, date: req.body.data, userId: req.user.id })
            res.redirect('/finance')
        } catch (err) {
            console.log(err)
        }
    },
    deleteTransaction: async (req, res) => {
        console.log(req.body.transactionIdFromJSFile + " teste")
        console.log(req.body)
        try {
            await Transaction.findOneAndDelete({ _id: req.body.transactionIdFromJSFile })
            res.json('Deleted')
        } catch (err) {
            console.log(err)
        }
    }
}    