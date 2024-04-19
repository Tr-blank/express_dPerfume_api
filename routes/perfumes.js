const express = require('express');
const router = express.Router();
const PerfumeModel = require('../models/perfume'); 


router.get('/', async (req, res) => {
  try {
    const perfumes = await PerfumeModel.find({});
    res.json(perfumes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
