import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
        select: false,
    },
    subscription_name: {
        type: String,
        required: [true, "Please provide a subscription name"],
        default: "Free",
    },
    role: {
        type: String,
        enum: ["user", "publisher"],
        default: "user",
    },
})

export default mongoose.model("User", UserSchema)
