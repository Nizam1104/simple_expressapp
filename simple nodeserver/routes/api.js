const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/students")
const schema = mongoose.Schema
const model = mongoose.model

const student_schema = new schema({
    student_name : {type:String, required : true},
    roll_no : String,
    parent_email : String,
    parent_phone : String

})

var student_info = model('students',student_schema )

router.post('/students',(req,res)=>{
    var student = new student_info(req.body)
    
    student.save((err,res)=>{
        if(err) return err
    })

})


module.exports = router;
