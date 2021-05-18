const connection = require("./db-config");
const express = require('express')
const app = express()

const port = process.env.PORT || 5555

app.get('/items', (req, res) => {
  connection.query('SELECT * FROM items', (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving data from database');
    } else {
      res.status(200).json(result);
    }
  })
})

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
  } else {
    console.log('connected to database with threadId :  ' + connection.threadId);
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
})