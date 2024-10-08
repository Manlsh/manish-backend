const asyncHandler = (requestHandler) => {
   return (res, req, next) => {
    Promise.resolve(requestHandler(req, res, next))
    .catch((err) => next(err));
  }
}

export {asyncHandler}





/*
For understanding the higher order function

const asyncHandler = () => {};
const asyncHandler = (fn) => () => {};
const asyncHandler = (fn) => async () => {};
*/


/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next)
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message
    })
  }
}
*/

