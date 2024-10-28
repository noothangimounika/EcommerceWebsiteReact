const mongoose=require("mongoose");

const reviewSchema=mongoose.Schema(
    {
        name:{type:String, require:true},
        rating:{type:Number, require:true},
        Comment: {typr:String, require:true},
        // user:{type:mongoose.Schema.Types.ObjectId, require:true},
    }
)

const productSchema=mongoose.Schema(
    {
        name: {typr:String, require:true},
        image:{type:String, require:true},
        description:{type:String, require:true},
        rating:{type:Number, require:true},
        numReview:{type:Number, require:true},
        price:{type:Number, require:true},
        countInStock:{type:Number, require:true},

       review:[]
    }
)

module.exports=mongoose.model("product",productSchema)
//where produt is to create db table