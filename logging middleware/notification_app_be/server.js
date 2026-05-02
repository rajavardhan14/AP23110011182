const express = require('express');
const logger = require('../logging_middleware/logger');

const app = express();
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
res.send('Backend running');
});

app.post('/notify', (req, res) => {
res.json({ message: req.body.message });
});

app.listen(3000);
