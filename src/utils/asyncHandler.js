const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resoleve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}

export { asyncHandler }


