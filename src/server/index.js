const express = require('express');
const items = require('./items');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('dist'));

app.get('/api/items', (req, res) => {
    const { search } = req.query;
    if (search) {
      const filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
      res.send({ items: filteredItems });
    } else {
      res.send({ items });
    }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports = app;
