# API Cron com Node.js
Simples exemplo de cron com Node.js.

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/en/)
- [Node Cron](https://www.npmjs.com/package/node-cron)
- [Express](https://expressjs.com/pt-br/)

## Definição

Crons são tarefas executadas automáticamente em forma de rotina. No Node.js a implementação pode ser feita por meio da biblioteca node-cron em conjunto com o Express.

A configuração da rotina é definida por 5 parâmetros:

```bash
* * * * * * *
| | | | | | | dia da semana
| | | | | | mês
| | | | dia mês
| | | hora
| | minuto
| segundo (opcional) 
```

O exemplo abaixo define uma cron que é executada a cada 1 minuto.

```javascript
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
```

Recomenda-se ainda o portal <a href='https://crontab.guru/#*_*_*_*_*'>crontab guru</a> para testes e configuração de parâmetros.


## 🚀 Como Iniciar
~~~bash
npm run start
~~~

```bash
> api-cron@1.0.0 start /home/node-api-cron
> node src/server.js

Listening on port 3000
2023-11-03T15:31:00.180Z
2023-11-03T15:32:00.271Z
2023-11-03T15:33:00.352Z
```

## Contribuidor
Otávio Augusto Souza Silva.


[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/otaviosilva22/)](https://www.linkedin.com/in/otaviosilva22/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:otavio.ssilva22@gmail.com)](mailto:otavio.ssilva22@gmail.com)
