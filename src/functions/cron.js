

class CronJob{
    
    async cron(req, res){
        try{
            console.log(new Date());

            return res.status(200).json({
                date: new Date()
            })
        }catch(e){
            return res.status(400).json({
                error: e
            })
        }
    }

}

module.exports = CronJob;