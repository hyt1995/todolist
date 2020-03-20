const express = require('express');
const bodyparser= require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

app.get('/api/massage',(req,res)=>{
    res.send([{'gksdudxkr':'안녕ㅎ'}]) 
}); 

app.listen(port,()=>{console.log(`serer play on port ${port}`)})