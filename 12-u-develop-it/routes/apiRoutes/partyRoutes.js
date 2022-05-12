const express = require('express');
const router = express.Router();
const db = require('../../db/connection');


router.get('/parties', (req, res) => {
    // const sql = `SELECT * FROM parties`;
    const sql = `SELECT * FROM voters ORDER BY last_name`;
    db.query(sql, )
  })
  

  module.exports = router;