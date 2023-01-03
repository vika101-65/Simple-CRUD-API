const { server } = require('../src/index.js');
const request = require('supertest');

const user = {
  "username": "vik",
  "age": 34,
  "hobbies": ["bla"]
};

const updateUser = {
  "username": "vika",
  "age": 21,
  "hobbies": ["english"]
};


describe('Post Endpoints', () => {
  let id = "";
  it('should create a new post', async () => {
    const res = await request(server)
      .post('/api/users')
      .send(user);
    id = res.body.id;
  });

  it('should update user', async () => {
    const res = await request(server)
      .put(`/api/users/${id}`)
      .send(updateUser)
    
    expect(res.body).toEqual({...updateUser, id})  
    
  });

  it('should receive statusCode 400', async () => {
    const res = await request(server)
    .put(`/api/users/efefe`)

    expect(res.statusCode).toEqual(400);
    server.close();
  })
});
