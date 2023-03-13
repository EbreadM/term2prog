/* eslint-disable no-undef */

const request = require('supertest');
const app = require('./app');

describe('Test the business service', () => {
    test('GET /business succeeds', () => {
        return request(app)
	    .get('/business')
	    .expect(200);
    });

    test('GET /business returns JSON', () => {
        return request(app)
	    .get('/business')
	    .expect('Content-type', /json/);
    });

    test('GET /business includes Bob', () => {
        return request(app)
	    .get('/business')
	    .expect(/Bob/);
    });

    test('GET /business/Bob succeeds', () => {
        return request(app)
	    .get('/business/Bob')
	    .expect(200);
    });

    test('POST /business/new', () => {
        const params = { name: 'Sunny', headquarters: 'Marys Computer Room', rating: '4.5', mobile: '+44 7563 8767 67', email: 'deez@dur.scammers.uk'};
        return request(app)
        .post('/business/new')
        .send(params)
	    .expect(200);
    });
});

describe('Test the items service', () => {
    test('GET /items succeeds', () => {
        return request(app)
	    .get('/items')
	    .expect(200);
    });

    test('GET /items returns JSON', () => {
        return request(app)
	    .get('/items')
	    .expect('Content-type', /json/);
    });

    test('GET /items includes Tech', () => {
        return request(app)
	    .get('/items')
	    .expect(/Tech/);
    });

    test('GET /items/Tech succeeds', () => {
        return request(app)
	    .get('/items/Tech')
	    .expect(200);
    });

    test('POST /items/new', () => {
        const params = { title: 'santa', image: 'dfiudhf', location:'church', price: '£77', category: 'Keys' };
        return request(app)
        .post('/items/new')
        .send(params)
	    .expect(200);
    });
});
