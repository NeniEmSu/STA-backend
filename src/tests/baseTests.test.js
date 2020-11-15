const request = require('supertest');
const app = require('../../app');

// Below commented lines functionality were substituted by the global test config.
// const tableNames = require('../constants/tableName');

// const db = require('../../config/dbConfig');

// beforeAll(async () => {
//   await db(tableNames.test).insert([{ name: 'Neni' }, { name: 'Babas' }, { name: 'Temi' }]);
// });

// afterAll(async () => {
//   await db.raw('TRUNCATE TABLE test RESTART IDENTITY CASCADE');
// });

describe('users endpoints', () => {
  describe('GET /', () => {
    it('should return 200', async () => {
      const response = await request(app).get('/api/v1/test').expect(200);
      expect(response.type).toEqual('application/json');
    });
    it('should be an object/array', async () => {
      const response = await request(app).get('/api/v1/test').expect(200);
      expect(typeof response.body).toBe('object');
    });
    it('should return a length of 3', async () => {
      const response = await request(app).get('/api/v1/test').expect(200);
      expect(response.body.length).toBe(3);
    });
  });
  describe('GET /:id', () => {
    it('should return 200', async () => {
      await request(app).get('/api/v1/test/1').expect(200);
    });
    it('should be an object/array', async () => {
      const response = await request(app).get('/api/v1/test/1').expect(200);
      expect(typeof response.body).toBe('object');
    });
    it('should return the right user', async () => {
      const expected = { id: 1, name: 'Bob' };
      const response = await request(app).get('/api/v1/test/1').expect(200);
      expect(response.body[0].name).toBe(expected.name);
    });
  });
  describe('POST /', () => {
    it('adds a user into db', async () => {
      const user = { name: 'Test' };
      const posting = await request(app)
        .post('/api/v1/test/')
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201);

      expect(posting.body).toEqual([4]);
    });
    it('is the right user', async () => {
      const getUser = await request(app).get('/api/v1/test/4');
      expect(getUser.body[0].name).toEqual('Test');
    });
  });

  describe('PUT /', () => {
    it('changes the name of user', async () => {
      const user = { name: 'updatedTest' };
      await request(app)
        .put('/api/v1/test/4')
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      const getUser = await request(app).get('/api/v1/test/4');
      console.log(getUser.body);
    });
    it('is the right user', async () => {
      const getUser = await request(app).get('/api/v1/test/4');
      expect(getUser.body[0].name).toEqual('updatedTest');
    });
  });

  describe('DELETE /', () => {
    it('should return 204', async () => {
      await request(app).delete('/api/v1/test/4').expect(204);
    });
    it('should have a length of 3', async () => {
      const getUsers = await request(app).get('/api/v1/test/');
      expect(getUsers.body.length).toEqual(3);
    });
  });
});
