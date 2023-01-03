const { server } = require('../src/index.js');
const request = require('supertest');

describe('Get Endpoints', () => {
  it('should get all users', async () => {
    const res = await request(server)
      .get('/api/users')
    
    expect(res.statusCode).toEqual(200);

    expect(res.body).toEqual([]);

    server.close();

  })
});