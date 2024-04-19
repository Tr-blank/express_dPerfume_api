const express = require('express');
const router = express.Router();
const PerfumeModel = require('../models/perfume'); 


router.get('/', async (req, res) => {
  try {
    const perfumes = await PerfumeModel.find({});
    res.json(perfumes);
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const postData = req.body
    const newPerfume = await PerfumeModel.create(postData);
    res.json(newPerfume);
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
});

module.exports = router;
