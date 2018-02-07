'use strict';

const db = require("../config/db")

class Question{
   static CreateTable(){
     return new Promise(function(resolve){
       resolve("nothing");
     })


   }
}


module.exports = Question;
