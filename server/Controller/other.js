const error = async(req,res)=>{
    res.status(400).json({
        message:false,
        message:"API not Found"
    })
}
export {error}