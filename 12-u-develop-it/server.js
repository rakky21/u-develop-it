const express = require('express');
const inputCheck = require('./utils/inputCheck.js');
const db = require('./db/connection');

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// const path = require('path');
// const fs = require('fs');
// const { resolveSoa } = require('dns');
// const { post } = require('got');

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);






// default response for any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});

// app.listen(PORT, () => {
//   console.log(`App listening on PORT ${PORT}`);
// });


// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});