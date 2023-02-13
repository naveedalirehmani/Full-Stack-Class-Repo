const mongoose = require('mongoose')
const model = require('../db/scema')
const bcryptjs = require('bcryptjs')


const login = async (req, resp) => {

    const { email, password } = req.body

    const info = await model.findOne({ email: email })

    const pas = bcryptjs.compareSync(password, info.password)
    
    if (pas) {
        
        resp.setHeader('Content-Type', 'text/plain');
        resp.status(200).send('home page')
    }

    else {
        resp.status(401).send('email or password is incorect')
    }

}




const postmethod = async (req, resp) => {

    const { name, password, email } = req.body;

    const pas = await bcryptjs.hash(password, 10)
    console.log(pas)
    // const pas=bscryptjs.
    const userEntry = await model({
        name,
        password: pas,
        email

    })
    await userEntry.save()




    resp.status(201).json({ userEntry })

}

// model.exports = login

module.exports = {
    login, postmethod
}

