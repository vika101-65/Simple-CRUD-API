const { server } = require('../src/index.js');
const request = require('supertest');

const user = {
  "username": "vik",
  "age": 34,
  "hobbies": ["bla"]
}


describe('Get Endpoints', () => {
  let id = "";
  it('should create one user', async () => {
    const res = await request(server)
      .post('/api/users')
      .send(user);

    id = res.body.id;
  })

  it('should create one user', async () => {
    const res = await request(server)
      .delete(`/api/users/${id}`);

    expect(res.status).toBe(204);
  });

  it('should receive message there is no such object', async () => {
    const res = await request(server)
    .delete('/api/users/2372ada8-1720-4e4e-8ae5-32b3f92c872b');

    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({message:"Users doesn't exist"});
    server.close();
  })
});