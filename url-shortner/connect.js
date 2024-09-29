const mongoose = require("mongoose")

const DbConnect = async (url)=>{
    return mongoose.connect(url);
}

module.exports = {
    DbConnect,
}