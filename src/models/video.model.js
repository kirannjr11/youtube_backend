import mongoose, { Schema } from "mongoose"
const userSchema = new Schema(
    {
        username: {
            tyepe: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
            index:true //searchinng
        },
        email: {
            tyepe: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        fullname: {
            tyepe: String,
            required: true,
            trim: true,
            index:true
        },
        avatar: {
            tyepe: String, //clodinary url
            required: true,
        },
        avatar: {
            tyepe: String, //clodinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)


export const User = mongoose.model("User", userSchema)