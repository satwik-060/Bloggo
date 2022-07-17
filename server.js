const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');

app.set('view engine','ejs');

app.use('articles',articleRouter);

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen(5000);