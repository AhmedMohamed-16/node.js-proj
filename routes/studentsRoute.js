import { Router } from "express";
import std from "../database/studentsdb.js"
import {faker} from'@faker-js/faker'
const router =new Router()
router.get("/",async(req,res)=>{
    const x=await std.find().lean(); 
    res.render("students", {students:x});
    });  
router.get("/add",(req,res)=>{
    std.create({
        name:faker.name.firstName(),city:faker.address.city(),
       })
       res.send('one student created')
        });   
 router.get("/update/:id",async(req,res)=>{
    const x=await std.find({_id:req.params.id}).lean(); 
    res.send(x[0].name+'    has updated')
        
        }); 
router.get("/delete/:id",async(req,res)=>{
   await std.deleteOne({_id:req.params.id}).lean(); 
     const x=await std.find().lean(); 
     res.render("students", {students:x});
    }); 
 router.get("/:id",async(req,res)=>{
    const x=await std.find({_id:req.params.id}).lean(); 
    res.render("students", {students:x});
  
     });  
export default router;                                