let express = require('express');
let app = express();
let port = 9120;
let {dbConnect,getData} = require('./controller/dbController')

app.get('/',(req,res) => {
    res.send('Hiii From express')
})

//get all category
app.get('/category',async (req,res) => {
    let query = {};
    let collection = "category"
    let output = await getData(collection,query)
    res.send(output)
})

//get all mealtype
app.get('/products',async (req,res) => {
    let query = {};
    let collection = "products"
    let output = await getData(collection,query)
    res.send(output)
})


app.listen(port,(err)=> {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})