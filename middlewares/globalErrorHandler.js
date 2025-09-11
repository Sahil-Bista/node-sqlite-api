export const globalErrorHandler = async(req , res , next , err) =>{
    console.log(err.stack);

    return res.status(err.statusCode || 500).json({
        status : 'error',
        message : err.message || 'Something went wrong'
    })
};