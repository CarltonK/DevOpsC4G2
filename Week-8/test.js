const server = require('./index');
const request = require('supertest');

// Test Suite 1 - The first batch of related tests
describe('Base Endpoints', () => {
    // Individual tests
    it('Can do a basic GET request', async () => {
        const response = await request(server)
            .get('/')
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ running: true });
    });
    it('Can do a basic GET request on /users', async () => {
        const response = await request(server)
            .get('/user')
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ users: [] });
    });
});

afterAll(() => {
    server.close();
});