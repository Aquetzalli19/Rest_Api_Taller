//dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//routes
const pokemon = require('./routes/pokemon')
const user = require('./routes/user');
//middleware
const auth = require('./middleware/auth.js')
const notFound = require('./middleware/notFound.js')
const index = require('./middleware/index.js')
const cors = require('./middleware/cors.js')

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get("/", index);

app.use("/user", user);
app.use(auth)
app.use("/pokemon", pokemon);
app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
    console.log('server is runing...');
});