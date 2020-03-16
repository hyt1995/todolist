const express = require('express');
const bodyparser= require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

app.get('/api/massage',(req,res)=>{
    res.send([{
        'name':'홍길동',
        'birthday':'950527',
        'image':'https://placeimg.com/64/64/any',
        'gender':'남자',
        'job':'대학생',
        'id':'4ㅅㄷ4ㅅㄱ'

      },
      {
        'name':'한영탁',
        'birthday':'96565650527',
        'image':'https://placeimg.com/64/64/any',
        'gender':'남ㅁㄳ자',
        'job':'대학ㄱㅈㅅㄷㄱ생',
        'id':'hyt1995'
      },
      {
        'name':'황정민',
        'birthday':'95054655527',
        'image':'https://placeimg.com/64/64/any',
        'gender':'남ㄳㄳ자',
        'job':'대학ㅁㅅ4ㅅ생',
        'id':'ㅅㄱㄳㄷㅅ4'
      }
      ])
}); 

app.listen(port,()=>{console.log(`serer play on port ${port}`)})