import mongoose from "mongoose";

const CategorySchema =new mongoose.Schema({
    nameCategory:{
        type:String,
        require:true,
        trim:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    }
    

},{timestamps:true});

export default mongoose.model('Category',CategorySchema);