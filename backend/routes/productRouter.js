const express  = require('express')
const { getProduct, createProduct, updateProduct, deleteProduct, getImage } = require('../controllers/productController')

const productRouter = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage })

productRouter.get('/products', getProduct)
productRouter.post('/products', upload.single('image'), createProduct)
productRouter.get('/image/:id', getImage)
productRouter.patch('/product/:id', updateProduct)
productRouter.delete('/product/:id', deleteProduct)

module.exports = productRouter