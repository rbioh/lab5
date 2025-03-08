
const express = require('express'); // load express module
const nedb = require("nedb-promises"); // load nedb module

const app = express(); // init app
const db = nedb.create('myfile.json'); // init db

app.use(express.static('public')); // enable static routing
// add your http routes here
// . . . . .
// Insert
app.get('/Insert', (req, res) => {
    try {
        const doc = JSON.parse(req.query.doc); // Validate JSON
        db.insertOne(doc)
            .then((doc) => res.send('Inserted: ' + JSON.stringify(doc, null, 2)))
            .catch((err) => res.status(500).send('Database error: ' + err.message));
    } catch (error) {
        res.status(400).send('Invalid JSON format: ' + error.message);
    }
});

// Search
app.get('/search', (req, res) => {
    try {
        const query = JSON.parse(req.query.find); // Validate JSON
        db.find(query)
            .then((docs) => {
                const results = docs.map(doc => JSON.stringify(doc, null, 2)).join('<br>');
                res.send('Results:<br>' + results);
            })
            .catch((err) => res.status(500).send('Database error: ' + err.message));
    } catch (error) {
        res.status(400).send('Invalid JSON format: ' + error.message);
    }
});
// default route
app.all('*',(req,res)=>{res.status(404).send('Invalid URL.')});
// start server
app.listen( 3000, ()=>console.log('server started: http://localhost:3000') );
