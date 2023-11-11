// Step 1 - Import Mongoose
import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose';

// Step 2 - Create a Schema that matches the data
const User1Schema = new Schema
({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Password: String,
    Created:
    {
        type: Date,
        default: Date.now()
    },
    Updated:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users1"
});

declare global
{
    export type UserDocument1 = mongoose.Document &
    {
        username: String,
        EmailAddress: String,
        DisplayName: String,
        Password: String
    }
}

// Step 3 - plugin the passport local mongoose module
UserSchema1.plugin(passportLocalMongoose);

// Step 4 - Create a Model using the Schema
const Model = mongoose.model("User", UserSchema1 as PassportLocalSchema);

// Step 5 - Export the Model -> this makes the file a module
export default Model;