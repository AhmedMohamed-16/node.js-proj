import { Schema,model } from "mongoose";
  const std=new Schema({
name:{
    type: String,
    required:true,
},
city:{
    type: String,
    required:false,
},
},{timestamps:true});
export default   model("stud",std);

