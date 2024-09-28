const asyncHandler = (requestHandler) => {
   return (req, res, next) => {
        Promise.resoleve(requestHandler(req, res, next)).
        catch((err) => next(err))
    } 
}

export { asyncHandler }


