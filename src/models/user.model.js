import mongoose, { Schema } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

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

userSchema.pre("save", async function (next) {
    if(!this.isModifeid("password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next()
})

export const User = mongoose.model("User", userSchema)