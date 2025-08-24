import { ApiError } from "../utills/ApiError";
import { asyncHandler } from "../utills/asyncHandler";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";


export const verifyJWT = asyncHandler(async(req, res, next) => {
  try {
    const token = req.cookies?.accessToken || req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauhtorized request");
    }
    const decodedToken = jwt.verify(token, process.
      env.ACCESS_TOKEN_SECRET);

  const user = await User.findById(decodedToken?._id).
  select("-password -refreshToken");

  if (!user) {
    // NEXT_VIDEO: discuss about frontend
    throw new ApiError(401, "Invalid Access Token")
  }

  req.user = user;
  next()
  } catch (error) {
    throw new ApiError(401, "User token is inValid");
  }
})


