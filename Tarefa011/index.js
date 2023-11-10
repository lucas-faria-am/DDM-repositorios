const express = require("express");
const mongoose = require("mongoose");
const persoRoutes = require('./routes/personRoutes')

const app = express();


app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());



app.get('/', (req, res) => {

    res.json({message: 'teste!'})
})

app.use('/person', persoRoutes);


const DB_USER = 'lucasnc10'
const DB_PASSWORD = encodeURIComponent('Seed.123')

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bqvxgjr.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() => {
    console.log("conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((err) => console.log(err))



