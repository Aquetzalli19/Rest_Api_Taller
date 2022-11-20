const morgan = require('morgan');
const express = require('express');
const app = express();
const pokemon = require('./routes/pokemon')
const user = require('./routes/user');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get("/", (req, res, next) => {
    return res.status(200).send({code : 1 , message : "Bienvenidos al Pokedex"});
});

app.use("/pokemon", pokemon);
app.use("/user", user);

app.use( (req, res, next) => {
    return res.status(404).send({code : "404", message: "Url not found"});
});

app.listen(process.env.PORT || 3000, () => {
    console.log('server is runing...');
});