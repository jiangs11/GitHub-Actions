const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');

const app = express();

// Get exported routes
const helloRouter = require('./routes/helloRoutes');

// Global middlewear
// Set security HTTP Headers
app.use(helmet());

// Limit request from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, please try again in an hour!' 
});

app.use('/api', limiter);

// Setting CORS
app.use(cors());
app.options('*', cors());

// Body parser, reading data from body into req.body
app.use(express.json());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
// Pass in whitelist property to allow for some words to 'pollute'
app.use(hpp());


// PUT ROUTES HERE
app.use('/api/v1/hello', helloRouter);

module.exports = app;