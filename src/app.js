const express = require('express');
const cron = require('node-cron');

//express use
const app = express();
app.use(express.json());

//class Cron Job
const CronJob = require('./functions/cron');

//instance class
const cronJob = new CronJob();

//rota http get
app.get('/cronJob', cronJob.cron);

//cron schedule
cron.schedule("* * * * *", cronJob.cron); //cron que funciona de minuto em minuto

module.exports = app;