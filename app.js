// all server side code: const blah blah express blah
const express = require('express'); // literally just express
const app = express(); // literally just express but you run it so you call it app i think
const path = require('path'); // this one we use only for the next line basically
const fs = require('fs');
app.use(express.static(path.join(__dirname, 'client'))); // this one makes it so we dont have CORS errors which im not exactly sure what that is but its bad and it also helps us display our html file on the page

const itemsJSON = './items.json'; // this one puts our json directory on a variable
const businessJSON = './business.json';
const business = require(businessJSON);
app.use(express.json()); // this one idk why we run it but we need it for express i think (you just need it idk)
const items = require(itemsJSON); // this one imports the JSON file from the directory, this is like the actual JSON in a variable

app.get('/items', function (req, resp) { // this one is a basic .get (it basically sends out something we want into a URL that we pick, in this case /items)
    const keys = Object.keys(items); // This one puts all of the keys in the json in a variable
    resp.send(keys); // this one sends out the keys to the server
});

app.get('/business', function(req, resp) {
    const thing = Object.keys(business);
    resp.send(thing);
});

app.get('/business/:business', function (req, resp) {
    const bussin = req.params.business;
    const send = business[bussin];
    resp.send(send);
});

app.get('/items/:item', function (req, resp) {
    const item = req.params.item;
    const send = items[item];
    resp.send(send);
});

app.post('/items/new', function (req, resp) {
    const title = req.body.title;
    const image = req.body.image;
    const location = req.body.location;
    const price = req.body.price;
    const category = req.body.category;

    items[category].push({
        title,
        image,
        location,
        price,
        category
    });
    fs.writeFileSync(itemsJSON, JSON.stringify(items));
    resp.send(items);
});

app.post('/business/new', function (req, resp) {
    const key = req.body.name;
    const Headquarters = req.body.headquarters;
    const Rating = req.body.rating;
    const mobile = req.body.mobile;
    const email = req.body.email;

    business[key] = {
        Name: key,
        Headquarters: Headquarters,
        Rating: Rating,
        mobile: mobile,
        email: email
    };
    fs.writeFileSync(businessJSON, JSON.stringify(business));
    resp.send(business);
});

module.exports = app; // this is so on server.js we can go require(app) in order to import it and actually run the server, you dont realy need to know this one in detail its not too important.
