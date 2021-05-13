const express = require("express");
const addauthorRouter = express.Router();
function addauthorRoute(nav,addauthor){
addauthorRouter.get('/',function(req,res){
  res.render("addauthor",{
        nav,    addauthor,
       title:'Add Author',
  
    
   });});
   return addauthorRouter;
}
module.exports=addauthorRoute;