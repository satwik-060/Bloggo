const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');

app.set('view engine','ejs');

app.use('/articles',articleRouter);

app.get('/',(req,res)=>{
    articles = [{
        title : 'Test article 1',
        date : new Date(),
        description : 'test description 1'
    },
    {
        title : 'Test article 2',
        date : new Date(),
        description : 'test description 2'
    }
]
    res.render('articles/index',{articles:articles});
})

app.listen(5000);