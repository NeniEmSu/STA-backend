const supertest = require('supertest');

const app = require('../../app');

require('dotenv').config();

const user = {
  email: 'admin@gmail.com',
  username: 'admin',
  password: process.env.TEST_PWD,
  hashedPassword: process.env.HASHED_PWD,
};

describe('GET /api/v1/users', () => {
  it('should respond with an array of users', async () => {
    const response = await supertest(app)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.length).toBeGreaterThan(0);
  });
});
