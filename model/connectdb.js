require('dotenv').config()
const mongoose = require('mongoose')

console.log(process.env.NONGO_URI)
const connectiondb = async () => {

    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect('mongodb://localhost:27017/task', {

            useNewUrlParser: true,
            useUnifiedTopology: true,


            w: 'majority'
        })
        console.log('successfully connect to the data base')
    }
    catch (e) {
        console.log('not connect to the data base')

    }


}
module.exports = connectiondb