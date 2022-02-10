const express = require('express');

const app =  express();

// const booksRouter = require('./src/routes/bookRoutes')(nav);


// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');

// app.use('/books',booksRouter); 
//router


app.get('/',function(req,res){
 res.render("index");
});
app.get('/login',function(req,res){
    res.render("login");
   });
   app.get('/register',function(req,res){
    res.render("register");
   });
   
app.listen(5001,()=>{
    console.log("Started on Port 5001 ")
});