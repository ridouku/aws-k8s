import request from 'supertest';

import app from './app';

jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));

describe('GET /date', () => {
  let server = null;

  beforeAll(() => {
    server = app.listen(4001);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return 200', () => {
    return request(app)
      .get('/date')
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual({
          serverDate: '2020-01-01',
        });
      });
  });
});
