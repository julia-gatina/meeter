const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { version } = require('../../package.json');
const { log } = require('../logger');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Meeter REST API Docs',
      version
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: [
    './routes/mentor.js',
    './routes/mentee.js',
    './routes/meeting.js',
    './routes/test.js',
    './tools/swagger/schemas/*.js'
  ]
};

const swaggerSpec = swaggerJsdoc(options);

const initialize = (app, port) => {
  // Swagger page
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  log.info(`Docs available at http://localhost:${port}/api/docs`);
};

module.exports = {
  initialize
};
