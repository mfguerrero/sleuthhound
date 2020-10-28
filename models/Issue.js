const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  summary: {
    type: String,
    required: [true, 'Please add a summary'],
    trim: true,
    maxlength: [100, 'summary can not be more than 100 characters']
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category',
    required: true
  },
  severity: {
    type: String,
    default: 'minor',
    enum: ['trivial', 'minor', 'major', 'crash', 'blocking']
  },
  priority: {
    type: String,
    default: 'normal',
    enum: ['low', 'normal', 'high', 'urgent', 'immediate']
  },
  reproductability: {
    type: String,
    default: 'have not tried',
    enum: ['always', 'sometimes', 'random', 'cannot reproduce', 'have not tried', 'not applicable']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description can not be more than 1000 characters']
  },
  reproduction: {
    type: String,
    default: '',
    maxlength: [1000, 'Steps to reproduce can not be more than 1000 characters']
  },
  additionalNotes: {
    type: String,
    default: '',
    maxlength: [1000, 'Aditional notes can not be more than 1000 characters']
  },
  visibility: {
    type: String,
    default: 'public',
    enum: ['public', 'private']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Issue', IssueSchema);