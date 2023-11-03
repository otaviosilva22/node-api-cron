const express = require('express');

const app = express();
app.use(express.json());

const cron = require('node-cron');

//A cada minuto
cron.schedule("* * * * *", (req, res)=>{
    try{
        let date = new Date();
        console.log(date);
        return res.status(200).json({
            date
        })
    }catch(e){
        return res.status(500).json({
            error: e.message
        })
    }
});

const CronTaskController = require('./controllers/CronTaskController');
const cronTaskController = new CronTaskController();

// Caso queira validar com um controller externo 
//cron.schedule("* * * * *", cronTaskController.execute);

module.exports = app;