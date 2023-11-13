
const  productModel  = require("../Models/models")
const File = require('../Models/File')

exports.getProduct = async (req, res, next) => {
   try {
       const page = parseInt(req.query.page) || 1;
       const pageSize = parseInt(req.query.pageSize) || 10;
       const rating = req.query.rating;
       const category = req.query.category || "";
    // let { page, size , sort} = req.query
    // if(!page){
    //     page = 1;
    // }
    // if(!size){
    //     size =  6;
    // }
    // const limit = parseInt(size)
    // const pageNumber = parseInt(page)
    // const filter = rating ? { rating:rating } : {};
    const filter = category ? { category: category } : {}
   
    const skip = (page - 1) * pageSize
    const totalProduct = await productModel.countDocuments(filter)
    // const  = await productModel.countDocuments(filter)
    const filterProducts = Math.ceil(totalProduct / pageSize)

    const data = await productModel.find(filter).skip(skip).limit(pageSize).sort({createdAt: 1})
        
    if(!data){
        return res.status(404).json({message: "No data found", error:error.message})
    }
    return res.status(201).json({page, pageSize, user: data, filterProducts: filterProducts})
} catch (error) {
 return res.status(500).json({message:"An error occur while getting product", error: error.message})   
}
}
exports.getImage = async (req, res )=> {
    try {
        let { id } = req.params
        let file = await File.findOne({ _id: id})
        if(!file){
            return res.status(201).json({error: error.message})
        }
        res.setHeader("Content-Type", "image/jpeg")
         res.send(file.buffer)
    } catch (error) {
        return res.status(500).json({error: error.message, message: "An error occur while uploading image"})
    }
}
exports.createProduct = async(req, res) => {
    try {
        // console.log(req.body, req.file.mimetype);
        // if(!req.file){
        //     return res.status(400).json({message: "please upload an image"})
        // }
        const file = req.file;
        const uploadImage = new File({ ...file })
        await uploadImage.save();

        const data = await productModel.create({
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            rating: req.body.rating,
            category: req.body.category,
            // image: `http://localhost:7000/api/v1/image/${uploadImage._id}`
            image: `http://localhost:7000/api/v1/image/${uploadImage._id}`,
            // image: (uploadImage._id )
            
        })
        return res.status(201).json({success: true, message: "Product added successfully", product: data})
    } catch (error) {
        return res.status(500).json({message: "an error occur while adding your product", error:error.message})
    }
}
exports.updateProduct = async(req, res )=> {
    try {
    const { id } = req.params
    const  body  = req.body

    const data= await productModel.findByIdAndUpdate(id, body, {new: true})
    if(!data){
        return res.status(404).json({message: "No data available", error: error.message})
    }
    return res.status(201).json({success: true, message: `Product with Id ${id} updated succesfully`, product: data})
    
    
    
    } catch (error) {
        return res.status(500).json({message: "an error occur while adding your product", error:error.message})
    }
}
exports.deleteProduct = async(req, res) =>{
    try {
        const { id } = req.params
        const data = await productModel.findByIdAndDelete(id)
        if(!data){
            return res.status(404).json({error: error.message, message: `Product unavailable with id ${id}`})
        }
        return res.status(201).json({success: true, message: `Product with id ${id} deleted successfully`, product: data, fileData: fileData})
        
    } catch (error) {
        return res.status(500).json({error: error.message, message: `An error occur while deleting your product`})
    }
    
}