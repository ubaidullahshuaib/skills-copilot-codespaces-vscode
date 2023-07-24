// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
// const db = require('./db');
const commentsRouter = require('./routes/comments-router');

// const API_PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', commentsRouter);

app.listen(3000, () => console.log(`Server running on port 3000`));