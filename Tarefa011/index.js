const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Person = require("./models/Person");


app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());


app.post('/person', (req, resp) => {

    const {name, salary, approved} = reqbody;
})


app.get('/', (req, res) => {

    res.json({message: 'oi express!'})
})




const DB_USER = 'lucasnc10'
const DB_PASSWORD = encodeURIComponent('Seed.123')

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bqvxgjr.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() => {
    console.log("conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((err) => console.log(err))



//mongodb+srv://lucasnc10:Seed.123@cluster0.bqvxgjr.mongodb.net/bancodaapi?retryWrites=true&w=majority