export const globalErrorHandler = async(err, req , res , next) =>{
    console.log(err.stack);

    return res.status(err.statusCode || 500).json({
        status : 'error',
        message : err.message || 'Something went wrong'
    })
};