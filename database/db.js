import mongoose from 'mongoose';

const Connection=async()=>{
    try{
    const URL='mongodb+srv://kiran:kiran@cluster0.3u28ipf.mongodb.net/';
    await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
    console.log('database connected successfully');
    }
    catch(error){
        console.log('Error:',error.message);
    }
}

export default Connection;