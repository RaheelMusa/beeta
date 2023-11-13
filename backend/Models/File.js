const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    buffer: {type: Buffer }               
    
})
const File = mongoose.model('File', fileSchema)
module.exports = File