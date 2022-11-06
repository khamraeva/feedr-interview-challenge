const supertest = require('supertest');
const app = require('../index');

describe('GET /api/items', () => {
    it('Should return full list', async () => {
      const response = await supertest(app)
        .get('/api/items')
        .expect(200);

      expect(response.body).toHaveProperty('items');
      expect(response.body.items).toHaveLength(20);
    });

    it('Should return filtered list by search key', async () => {
      const response = await supertest(app)
        .get('/api/items?search=kale')
        .expect(200);

      expect(response.body).toHaveProperty('items');
      expect(response.body.items).toHaveLength(1);
      expect(response.body.items[0].name).toEqual('Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens');
    });
});
