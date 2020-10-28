const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Category must me unique'],
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [30, 'Name can not be more than 30 characters']
  },
  description: {
    type: String,
    default: '',
    maxlength: [100, 'Description can not be more than 100 characters']
  },
  isDefault: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// If isDefault, update isDefault to false for other categories
CategorySchema.pre(['save', 'update', 'updateOne', 'findOneAndUpdate', 'updateMany'], async function (next) {
  if (this.isDefault) {
    await this.model('Category').updateMany({ "isDefault": true }, { "$set": { "isDefault": false } });
  }
  next()
})

module.exports = mongoose.model('Category', CategorySchema);