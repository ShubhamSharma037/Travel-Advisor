var Router = require('express').Router()



Router.route('/').get((req,res)=>(res.send('Hi')))





module.exports = Router