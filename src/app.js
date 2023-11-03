const express = require('express');

const app = express();
app.use(express.json());

const CronTaskController = require('./controllers/CronTaskController');
const cronTaskController = new CronTaskController();

const cron = require('node-cron');

// Caso queira validar com um controller externo
//cron.schedule("* * * * *", cronTaskController.execute);


//A cada minuto
cron.schedule("* * * * *", (req, res)=>{
    try{
        let date = new Date();
        console.log(date);
        return res.status(200).json({
            date
        })
    }catch(e){
        return res.status(400).json({
            error: e
        })
    }
});


module.exports = app;