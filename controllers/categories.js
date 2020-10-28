const Category = require('../models/Category');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get all categories
// @route   GET /api/v1/categories
// @access  private
exports.getCategories = asyncHandler(async (req, res, next) => {
  const cateogires = await Category.find().sort({ name: 1 });
  res.status(200).json({ success: true, data: cateogires });
});

// @desc    Get single category
// @route   GET /api/v1/categories/:id
// @access  Private
exports.getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id)
  if (!category) return next(getNotFoundResponse(req.params.id));
  res.status(200).json({ success: true, data: category })
});

// @desc    Create new category
// @route   POST /api/v1/categories
// @access  Private
exports.createCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(201).json({ success: true, data: category });
});

// @desc    Update Category
// @route   PUT /api/v1/categories/:id
// @access  Private
exports.updateCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!category) return next(getNotFoundResponse(req.params.id));

  res.status(200).json({ success: true, data: category })
});

// @desc    Delete category
// @route   DELETE /api/v1/categories/:id
// @access  Private
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) return next(getNotFoundResponse(req.params.id));
  category.remove();
  res.status(200).json({ success: true, data: category });
});

const getNotFoundResponse = (id) => new ErrorResponse(`Category not found with id of ${id}`, 404);