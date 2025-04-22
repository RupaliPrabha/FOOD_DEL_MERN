const mongoose = require("mongoose")

const connectDB =async()=>{

    const MONGO_URI =process.env.MONGO_URI;

    try{
      const response =await mongoose.connect(MONGO_URI)
      console.log("Database is connected successfully");
     
    }
    catch(e){
        console.log("Error in connection",e);
        
    }


}

module.exports={connectDB}