const express = require('express');

// imports controller functions
const {
  getIssues,
  getIssue,
  createIssue,
  updateIssue,
  deleteIssue,
  uploadIssueFiles
} = require('../controllers/issues');

const router = express.Router();

// route request to controller
router.route('/')
  .get(getIssues)
  .post(createIssue);

router.route('/:id')
  .get(getIssue)
  .put(updateIssue)
  .delete(deleteIssue);

router.route('/:id/files')
  .put(uploadIssueFiles);

// export router
module.exports = router; 