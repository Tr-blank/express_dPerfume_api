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

router.get('/:id', async (req, res) => {
  try {
    const perfume = await PerfumeModel.findById(req.params.id);
    res.json(perfume);
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    // 使用亂數去產生隨機亂碼，toString(36)縮短其位數，並轉換為36進位[0～9、a～z]，substr(2,n)移除開頭0和小數點，n為自訂亂碼字元數
    const randomID = Math.random().toString(36).substring(2, 8)
    const postData = { ...req.body, id: randomID }
    const newPerfume = await PerfumeModel.create(postData);
    res.json(newPerfume);
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const postData = req.body
    const updatedPerfume = await PerfumeModel.findByIdAndUpdate(req.params.id, postData);
    res.json(updatedPerfume);
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedPerfume = await PerfumeModel.findByIdAndDelete(req.params.id);
    res.json(deletedPerfume);
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
});

module.exports = router;
