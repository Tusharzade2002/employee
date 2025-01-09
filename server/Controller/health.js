const health =async(req,res)=>{
    res.status(200).json({
        message:true,
        message:"Server is running"
    })
}
export {health}