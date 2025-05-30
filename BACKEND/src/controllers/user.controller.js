import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new apiError(500, "Something went wrong while generating Access and Refresh Token");
  }
}

// Register
const userRegister = asyncHandler(async (req, res, next) => {

  const { name, email, password } = req.body;

  // Optional: Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new apiError(409, "User already exists");
  }

  const user = await User.create({ name, email, password });

  return res
    .status(201)
    .json(new apiResponse(201, "User created successfully", user));
});

// Login
const userLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new apiError(404, "User not found");
  }

  const isPasswordMatch = await user.isPasswordCorrect(password);
  if (!isPasswordMatch) {
    throw new apiError(401, "Invalid credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const options = {
    httpOnly: true,
    secure: true,
  }

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new apiResponse(200, "User Login successful", {
      user: loggedInUser,
      accessToken,
      refreshToken,
    }));
});

// Logout
const userLogout = asyncHandler(async (req, res, next) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      }
    }, {
    new: true,
  }
  )

  const options = {
    httpOnly: true,
    secure: true,
  }

  return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new apiResponse(200, "User Logout successful", {}));
});

const refreshAccessToken = asyncHandler(async (req, res, next) => {
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) {
    throw new apiError(401, "Unauthorized");
  }

  try {
    const deocodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(deocodedToken?._id);
  
    if (!user) {
      throw new apiError(401, "Invalid refresh token");
    }
    if (incomingRefreshToken !== user?.refreshToken) {
      throw new apiError(401, " refresh token is Expired or used");
    }
  
    const options = {
      httpOnly: true,
      secure: true,
    }
  
    const { accessToken, newRefreshToken } = await generateAccessAndRefreshToken(user._id);
  
    return res.status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(new apiResponse(200, "Access Token Refreshed", {
        accessToken,
        newRefreshToken,
      }));
  } catch (error) {
    throw new apiError(401, "Invalid refresh token" || error?.message);
  }
});

export { userRegister, userLogin, userLogout, refreshAccessToken };

