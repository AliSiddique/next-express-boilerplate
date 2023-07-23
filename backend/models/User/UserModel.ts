import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: [true, "Please provide a uid"],
        unique: true,
        primaryKey: true,
    },
    displayName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    subscription_name: {
        type: String,
        required: true,
        default: "Free",
    },
})

export default mongoose.model("User", UserSchema)
