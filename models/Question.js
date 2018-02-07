'use strict';

const db = require("../config/db")

class Question{
   static CreateTable(){
     return new Promise(function(resolve){
       const sql = `CREATE  TABLE questions (id INTEGER PRIMARY KEY)`
       resolve("nothing");
     })


   }
}


module.exports = Question;
