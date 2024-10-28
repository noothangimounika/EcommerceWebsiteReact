const express=require('express')

const app=express();

const dotenv=require('dotenv');
dotenv.config();

// const PORT=3000;
const products=require("./data/products")



//Text Route
// app.get("/",(req,res)=>{
//     res.send("Hello Everyone");
// });

// api/produts Route 
// app.get("/api/produts",(req,res)=>{
//     res.json(products);
// });

// // api/produts/id Route 
// app.get("/api/produts/id",(req,res)=>{
//     const product=products.find((product)=>product.id ==req.params.id)
//     res.json(product);
// });

const PORT=process.env.PORT;



//Connect Db
const mongoose=require("mongoose")

mongoose.connect(process.env.MONGOOSEDB_URL)
.then(()=>
    console.log("Db Connected Successfully")
)
.catch((err)=>{
   console.log(`db Error is ${err}`)
})

app.listen(PORT,()=>{
    console.log(`server running at port number is ${PORT}`)
})




