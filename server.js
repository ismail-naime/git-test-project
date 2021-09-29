const express = require ('express')
const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World! NodeJs')
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log("I am running on port 3000")
})