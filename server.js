const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/nodejs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log("could not connect to database", err);
    process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ "user": "Hello World! running in database" });
})

let PORT = 8000;
require('./routes/app.routes')(app);

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT} `);
})

