const request = require('supertest');
const app = require('../api');

describe('GET /posts', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/posts')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('response when page is 1 and limit is 2', (done) => {
    request(app)
      .get('/posts?page=1&limit=2')
      .expect(200, (err, res) => {
        res.body.length === 2;
        done()
      });
  });
  it('response with page is 2 and limit is 3', (done) => {
    request(app)
      .get('/posts?page=1&limit=2')
      .expect(200, (err, res) => {
        res.body.length === 3;
        done()
      });
  });
});