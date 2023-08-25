const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const routerConfig = require('./routes/config');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

let envVariable = process.env.DOMAIN_URL || '';
let domainUrl = envVariable.split('//');
const options = {
  openapi: '3.0.0',
  definition: {
    info: {
      version: 'v1.0.0',
      title: "api-service API's",
      description: 'This lists and describes the API-Service endpoints',
    },
    host: `${domainUrl[1]}`,
    basePath: '/',
    schemes: ['http', 'https'],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(options);
//Documentation
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routerConfig.forEach((rou) => {
  let route = rou[0];
  let router = rou[1];
  app.use(route, router);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log('process.env.PORT ===================', req.query)
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  return res.status(err.status || 500).json({
    error: err.message,
  });
});

module.exports = app;
