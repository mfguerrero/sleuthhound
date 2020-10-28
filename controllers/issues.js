// const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get all issues
// @route   GET /api/v1/issues
// @access  private
exports.getIssues = asyncHandler(async (req, res, next) => {

  // let reqQuery = { ...req.query };

  // // Fields to exclude
  // const removeFields = ['select', 'sort', 'page', 'limit']
  // removeFields.forEach(field => delete reqQuery[field]);

  // let queryStr = JSON.stringify(reqQuery);
  // queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match =>
  //   `$${match}`
  // )

  // // Select
  // let fields = '';
  // if (req.query.select) fields = req.query.select.split(',').join(' ');

  // //  Sort
  // const sortBy = req.query.sort ? req.query.sort.split(',').join(' ') : '-createdAt';

  // // Paginate
  // const page = parseInt(req.query.page, 10) || 1;
  // const limit = parseInt(req.query.limit, 10) || 20;
  // const startIndex = (page - 1) * limit
  // const endIndex = page * limit;
  // const total = await Bootcamp.countDocuments();



  // // Execute
  // const bootcamps = await Bootcamp.find(JSON.parse(queryStr))
  //   .populate('courses')
  //   .select(fields)
  //   .sort(sortBy)
  //   .skip(startIndex)
  //   .limit(limit);

  // // Pagination Ctrl
  // const pagination = {};
  // if (endIndex < total) pagination.next = { page: page + 1, limit }
  // if (startIndex > 0) pagination.prev = { page: page - 1, limit }


  // // Return
  // res.status(200).json({ success: true, count: bootcamps.length, pagination, data: bootcamps })

  res.status(200).json({ success: true, data: 'Get all issues' })


});

// @desc    Get single issue
// @route   GET /api/v1/issues/:id
// @access  Private
exports.getIssue = asyncHandler(async (req, res, next) => {
  // const bootcamp = await Bootcamp.findById(req.params.id)
  // if (!bootcamp) return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
  // res.status(200).json({ success: true, data: bootcamp })
  res.status(200).json({ success: true, data: 'Get single issue' })
});

// @desc    Create new issue
// @route   POST /api/v1/issues
// @access  Private
exports.createIssue = asyncHandler(async (req, res, next) => {
  // const bootcamp = await Bootcamp.create(req.body)
  // res.status(201).json({ success: true, data: bootcamp })
  res.status(201).json({ success: true, data: 'Create bew issue' })
});

// @desc    Update Issue
// @route   PUT /api/v1/issues/:id
// @access  Private
exports.updateIssue = asyncHandler(async (req, res, next) => {
  // const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
  //   new: true,
  //   runValidators: true
  // })
  // if (!bootcamp) return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));

  // res.status(200).json({ success: true, data: bootcamp })
  res.status(200).json({ success: true, data: 'Update issue' })
});

// @desc    Delete issue
// @route   DELETE /api/v1/issues/:id
// @access  Private
exports.deleteIssue = asyncHandler(async (req, res, next) => {
  // const bootcamp = await Bootcamp.findById(req.params.id)
  // if (!bootcamp) return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
  // bootcamp.remove();
  // res.status(200).json({ success: true, data: bootcamp })
  res.status(200).json({ success: true, data: 'Delete issue' })
})


// @desc    Upload issue files
// @route   PUT /api/v1/issues/:id/files
// @access  Private
exports.uploadIssueFiles = asyncHandler(async (req, res, next) => {
  // const bootcamp = await Bootcamp.findById(req.params.id)
  // if (!bootcamp) return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
  // if (!req.files) return next(new ErrorResponse('Please attach photo to upload!', 400));

  // res.status(200).json({ success: true, data: bootcamp })
  res.status(200).json({ success: true, data: 'upload files' })

})



