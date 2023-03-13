const express = require('express');
const app = express();

const itemsJSON = './items.json';
const businessJSON = './business.JSON';

const fs = require('fs');

app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));

const business = require(businessJSON);
const items = require(itemsJSON);

app.get('/items', function (req, resp) {
    const keys = Object.keys(items);
    resp.send(keys);
});

app.get('/business', function (req, resp) {
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

module.exports = app;
