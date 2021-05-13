const express = require("express");
const authorRouter = express.Router();
function arouter(nav){
     
    var authors = [
        {
            title:'Joseph Barbera',
            author:'American Animator',
            img:"joseph.jpg"
        },
        {
            title:'J K Rowling',
            author:'British author',
            img:"jk.jpg"
        },
        {
            title:'Dan Brown',
            author:'American author',
            img:"inferno.jpg"
        }
    ]
    
    authorRouter.get('/',function(req,res){
        res.render("authors",{
        nav,
        title:'Library',
        authors
    
    });
    });
    authorRouter.get('/:i',function(req,res){
       const i = req.params.i
       res.render('author',{
        nav,
       title:'Library',
       author:authors[i]
    });
    });
    return authorRouter;
}



module.exports = arouter;