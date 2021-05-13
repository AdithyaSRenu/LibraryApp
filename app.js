const express = require("express");
const app = new express();
const port = process.env.PORT || 5000;
const nav = [
    {
        link:'/books',name:'Books'
    },
        {
            link:'/authors',name:'Authors'
        },
        {
            link:'/signup',name:'Sign up'
        },
        {
            link:'/login',name:'login'
        },
        {
            link:'/admin',name:'addbook'
        },
        {
            link:'/addauthor',name:'addauthor'
        }
    ];
const booksRouter = require('./src/routes/bookRoutes')(nav)

const authorRouter = require('./src/routes/authorRoutes')(nav)

const signupRouter = require('./src/routes/signupRoutes')(nav)

const loginRouter = require('./src/routes/loginRoutes')(nav)

const addauthorRouter =require('./src/routes/addauthorRoutes')(nav)
 
const adminRouter = require('./src/routes/adminRoutes')(nav)
 
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter); 
app.use('/authors',authorRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/addauthor',addauthorRouter);
app.use('/admin',adminRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'


    });
});



app.listen(port,()=>{console.log("Server Ready at",+ port)});