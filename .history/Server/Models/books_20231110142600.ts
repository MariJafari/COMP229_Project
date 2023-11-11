// Step 1 - Import Mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

// Step 2 - Create a Schema that matches the data
const ProductSchema = new Schema
({
    
    

    ISBN : Number ,
    Title: String ,
    Author: String ,
    Publisher:String,
    Year: Number

}
{
    collection: "product"
});

// Step 3 - Create a Model using the Schema
const Model = mongoose.model("Product", ProductSchema);

// Step 4 - Export the Model -> this makes the file a module
export default Model;