// npm modules
const express = require('express');
const env = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

const connectDB = require('./db/connect');
const errorHandler = require('./middleware/error')

// Routers
const issues = require('./routes/issues');
const categories = require('./routes/categories');

// Load env config
env.config({ path: './env/config.env' });

connectDB();

//  create express server
const app = express();

// Body Parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/categories', categories);
app.use('/api/v1/issues', issues);


// Use error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000
const serverMsg = `SERVER RUNNING IN ${process.env.NODE_ENV} MODE ON PORT: ${process.env.PORT}`.yellow.bold;

const server = app.listen(PORT, console.log(serverMsg));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error:  ${err.message}`.red);
  // Close server and exit process
  server.close(() => {
    process.exit(1)
  })
  server.close()
})