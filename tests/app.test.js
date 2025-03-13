const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('should return Event Planner API is running', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Event Planner API is running');
    });
});

