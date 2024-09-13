import { asyncHandler } from "../utills/asyncHandler.js";


const registerUser = asyncHandler( async (res, req) => {
  res.status(200).json({
    message: "chai aur manish"
  })
})


export {registerUser}