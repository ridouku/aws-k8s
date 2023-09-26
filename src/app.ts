import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.get('/date', (req, res) => {
  res.send({
    serverDate: new Date().toISOString().slice(0, 10),
  });
});

app.use(bodyParser.json({ limit: '200mb' }));

export default app;
