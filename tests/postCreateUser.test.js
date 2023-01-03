const { server } = require('../src/index.js');
const request = require('supertest');

const user = {
  "username": "vik",
  "age": 34,
  "hobbies": ["bla"]
}


describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(server)
      .post('/api/users')
      .send(user);

    expect(res.statusCode).toEqual(201);

    expect(res.body).toHaveProperty("id");

    expect(res.body.username).toEqual(user.username);

    expect(res.body.age).toEqual(user.age);

    expect(res.body.hobbies).toEqual(user.hobbies);
  });

  it('should receive message about error', async () => {
    const res = await request(server)
    .post('/api/users')
      .send({"username": "Lia"})

    expect(res.statusCode).toBe(400);
    server.close();  
  })  
});
