require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');
const ClientError = require('./client-error');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
const app = express();

app.use(staticMiddleware);

app.use(express.json());

app.get('/api/users', (req, res, next) => {
  const sql = `
  select "name",
  "city",
  "ntrpRating",
  "userId"
  from "users"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/messages', (req, res, next) => {
  const newMessage = req.body;
  const sender = parseInt(newMessage.senderId, 10);
  const recipient = parseInt(newMessage.recipientId, 10);
  const message = newMessage.message;
  const sql = `
  insert into "messages" ("senderId", "recipientId", "message")
  values ($1, $2, $3)
  returning *
  `;
  const params = [sender, recipient, message];
  if (!sender || !recipient || !message) {
    throw new ClientError(400, 'senderId, recipientId, or message is missing');
  }
  db.query(sql, params)
    .then(result => {
      const postedMessage = result.rows[0];
      res.status(201).json(postedMessage);
    })
    .catch(err => next(err));
});

app.get('/api/messages/:recipientId', (req, res, next) => {
  const recipientId = parseInt(req.params.recipientId, 10);
  if (!Number.isInteger(recipientId) || recipientId <= 0) {
    throw new ClientError(400, '"recipientId" must be a positive integer');
  }
  const sql = `
    select *
    from   "messages"
    where  "recipientId" = $1
  `;
  const params = [recipientId];
  db.query(sql, params)
    .then(result => {
      const messages = result.rows;
      if (!messages[0]) {
        throw new ClientError(404, `Cannot find messages with "recipientId" ${recipientId}`);
      } else {
        res.json(messages);
      }
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
