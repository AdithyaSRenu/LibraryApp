const express = require("express");
const signupRouter = express.Router();
function srouter(nav){
     

    
    signupRouter.get('/',function(req,res){
        res.render("signup",{
        nav,
        title:'Library',
        
    
    });
    });
    signupRouter.get('/:i',function(req,res){
       const i = req.params.i
       res.render('book',{
        nav,
       title:'Library',
       book:books[i]
    });
    });
    
    return signupRouter;
}



module.exports = srouter;