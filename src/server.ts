import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.send("Hell Low!");
});

app.listen(3333);