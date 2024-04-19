const express = require('express');
const router = express.Router();
const PerfumeModel = require('../models/perfume'); 


router.get('/', async (req, res) => {
  try {
    const perfumes = await PerfumeModel.find({});
    const categories = perfumes.map((perfume) => perfume.category);
    // 將陣列轉換為沒有重複元素的集合(Set)，再用展開運算子進行拷貝複製成陣列
    const setCategories = [...new Set(categories)] 
    res.json(setCategories);
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
});

module.exports = router;
