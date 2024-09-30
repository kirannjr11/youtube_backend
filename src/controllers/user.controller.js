import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import {  User } from "../models/user.model.js"
import { uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import path from "path";

const registerUser = asyncHandler(async (req, res) => {
    // get user details from front end
    // validation - not empty
    // check if user already exist
    // check for images
    // check for avatars
    // upload them to cloudinary
    // create user object - create entry in db
    // remove password and refresh fiekd from response
    // check for user creation
    // return  response

    const { fullName, email, username, password } = req.body
    console.log("email", email);

    // if(fullName === "") {
    //     throw new ApiError(400, "full name is required")
    // } 

    // Validate that none of the required fields are empty
    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

     // Check if the user already exists (either by username or email)
    const existedUser =  await User.findOne({
        $or: [{ username }, { email }]
    });

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists");
    }

  

    const avatarLocalPath = path.normalize(req.files?.avatar?.[0]?.path);
    const coverImageLocalPath = path.normalize(req.files?.coverImage?.[0]?.path);
    
    if(!avatarLocalPath) {
        throw new ApiError(400, "avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    // if(!avatar) {
    //     throw new ApiError(400, "avatar file is required")
    // }

   const user = await  User.create({
        fullName,
        avatar : avatar?.url || "",
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()

    })
    const createdUser = await User.findById(user._id).select(
        "-password  -refreshToken"
    )

    if(!createdUser) {
        throw new ApiError(500, "something went wromg while registering user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )



})


export { registerUser }