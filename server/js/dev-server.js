const express = require('express');
const app = express();
const port = 8080;
import fs from 'fs';
import bookingsJson from '../data/bookings.json';

// We need to add some middleware to parse the post data of the body
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies. Without this `req.body` of `app.post` would be `{}
app.use(
    // to support URL-encoded bodies
    bodyParser.urlencoded({
        extended: true,
    }),
);

// CORS on ExpressJS from https://enable-cors.org/server_expressjs.html
// Bind application-level middleware to an instance of the app object by using the app.use()
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

app.get('/', (req, res, next) => res.send('Hello World!'));

// POST method route - this is needed when server is getting POST request
// req is the request that we get from client
app.post('/', function(req, res, next) {
    res.send('POST request to the homepage');
    const targetedDate = req.body.date;
    console.log(`req.body`, req.body);

    let wasDateRemoved = false;
    for (let i = 0; i < bookingsJson.length; i++) {
        const date = bookingsJson[i].date;

        // if date in bookings.json matches targeted date
        if (date === targetedDate) {
            console.log(`this date matches: ${date}`);
            wasDateRemoved = true;
            //removed matched element
            bookingsJson.splice(i, 1);
        }
    }
    if (!wasDateRemoved) {
        bookingsJson.push(req.body);
    }

    // Writes bookings.json
    fs.writeFile(
        './server/data/bookings.json',
        JSON.stringify(bookingsJson),
        error => {
            if (error) throw error;
        },
    );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
