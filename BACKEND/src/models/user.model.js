import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: [true, "Password is required"] },
  refreshToken: {
    type: String,
    default: null,
  }
}, { timestamps: true });

//  Password Encryption middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password =await bcrypt.hash(this.password, 10);
  next();
})

// custom methods 
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign({
    _id: this._id,
    name: this.name,
    email: this.email,
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  }
  )
}

userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign({
    _id: this._id,
  },
  process.env.REFRESH_TOKEN_SECRET,
  {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  }
  )
}

const User = mongoose.model("User", userSchema);
export default User;

