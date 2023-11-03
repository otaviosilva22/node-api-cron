

class CronTaskController{
    
    async execute(req, res){
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
    }

}

module.exports = CronTaskController;