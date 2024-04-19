const mongoose = require('mongoose');

// {
//   "category": "清新海洋",
//   "id": "-Ni3EC_c7RwSD5BXb1m2",
//   "image": "https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "is_enabled": 1,
//   "origin_price": "500",
//   "price": "450",
//   "title": "藍色夢境",
//   "unit": "50ml"
// },

const perfumeSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'category is required'],
      trim: true
    },
    id: {
      type: String,
      required: [true, 'id is required'],
      trim: true
    },
    image: {
      type: String,
      required: [true, 'image is required'],
      trim: true
    },
    is_enabled: {
      type: Boolean,
      required: [true, 'is_enabled is required'],
      default: true
    },
    origin_price: {
      type: Number,
      default: 0,
      min: [0, 'origin_price >= 0']
    },
    price: {
      type: Number,
      default: 0,
      min: [0, 'price >= 0']
    },
    title: {
      type: String,
      required: [true, 'title is required'],
      trim: true
    },
    unit: {
      type: String,
      required: [true, 'unit is required'],
      trim: true
    }
  }
);

const Perfumes = mongoose.model('perfume', perfumeSchema);

module.exports = Perfumes;
