const express = require('express')

const app = express()

app.use(express.json())

app.post('/home',(req, res)=>{
    console.log(req.body);
    res.send('o yeah')
})

app.listen(3000,()=>{
    console.log("chal gaya");
    
})