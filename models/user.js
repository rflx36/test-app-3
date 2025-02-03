import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
});



const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
