const{default:mongoose}=require("mongoose")
const DB_URL="mongodb://localhost:27017/mongoose-tutorial"
async function connectDB(){
try {
        await mongoose.connect(DB_URL,{}),
            console.log(" server connected to db");
            
} catch (error) {
    console.log(error);
}
}
connectDB()