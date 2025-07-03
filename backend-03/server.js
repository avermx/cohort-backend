const express = require('express')

const app = express()


app.get('/home',(req, res)=>{
    res.send('chuttt')
})

app.listen(3000,()=>{
    console.log("chal gaya");
    
})