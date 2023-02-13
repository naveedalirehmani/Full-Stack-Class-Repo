// everything require poartion in  here
const express = require('express');
const connectiondb = require('./model/connectdb')
const Route = require('./routers/authroute')
const app = express();
const port = process.env.PORT || 3000;



// converter path middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// connect db
connectiondb()

// Routing

// app.use('/v1', Route)
app.use(Route)
app.get('/', (req, resp) => {
    resp.send('welcome to index page')

})





// lisning port
app.listen(port, () => {
    console.log('port is running')
});