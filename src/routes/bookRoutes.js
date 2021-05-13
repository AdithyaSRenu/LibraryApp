const express = require("express");
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(request,file,callback){
        callback(null,'./public/images');
    },
    filename:function(request,file,callback){
        callback(null,file.originalname)
    }
})

function router(nav){
     
    // var books = [
    //     {
    //         title:'Tom and Jerry',
    //         author:'Joseph Barbera',
    //         genre:'Cartoon',
    //         img:"tom.jpg"
    //     },
    //     {
    //         title:'Harry Potter',
    //         author:'J K Rowling',
    //         genre:'Fantasy',
    //         img:"potter.jpg"
    //     },
    //     {
    //         title:'Inferno',
    //         author:'Dan Brown',
    //         genre:'Thriller',
    //         img:"inferno.jpg"
    //     }
    // ]
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
            
            });
        });
        
    });
    booksRouter.get('/:i',function(req,res){
       const i = req.params.i
       Bookdata.findOne({_id:i})
       .then(function(book){
         
        res.render('book',{
            nav,
           title:'Library',
           book
        });
       })
      
    });
    return booksRouter;
}



module.exports = router;