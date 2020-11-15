const request = require('supertest');
const app = require('../../app');

describe('app.js', () => {
  describe('index route', () => {
    it('should return status 200', async () => {
      await request(app).get('/').expect(200);
    });

    it('should return a JSON object from the index route', async () => {
      const response = await request(app).get('/');

      expect(response.type).toEqual('application/json');
    });

    it('should return a hello World! JSON', async () => {
      const expectedBody = {
        message: 'Hello there welcome to my students assistant backend api.👨‍🎓👩‍🎓🏠',
      };
      const response = await request(app).get('/');
      expect(response.body).toEqual(expectedBody);
    });
  });
});
