
const pagination =(model) =>{
return async(req, res , next)=>{
    try {
        const { page, size, sort} = req.query

        if(!page){
            page = 1;
        }
        if(!size){
            size= 6;
        }
        const limit = parseInt(size)
        const pageNumber = parseInt(page)
        const skip = (pageNumber - 1) * limit
        // return res.status(201).json({skip})
        const data= await model.find().sort( {votes: 1, _id: 1}).skip(skip).limit(limit)
        req.paginatedData = data

        next()
    } catch (error) {

        return res.status(500).json({error: error.message, message: "An error occur in your pagination"})
    }
}
}
module.exports = pagination