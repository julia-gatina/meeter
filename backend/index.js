'use strict';

/* imports */
const envVar = require('./env-vars');
const express = require('express');
const { log } = require('./tools/logger');
const nodeLiquibase = require('node-liquibase');
const swagger = require('./tools/swagger/swagger');
const dbOrm = require('./models');

// DB Sequelize configuration
dbOrm.sequelize
  .authenticate()
  .then(() => console.log('Sequelize is successfully initialized and connected to DB'))
  .catch((err) => console.log('Error initializing Sequelize', err));

// DB Liquibase configuration
const myConfig = {
  ...nodeLiquibase.POSTGRESQL_DEFAULT_CONFIG,
  changeLogFile: './db/changelog.xml',
  url: `jdbc:postgresql://localhost:${envVar.DB_PORT}/${envVar.DB_NAME}`,
  username: envVar.DB_USERNAME,
  password: envVar.DB_PASSWORD
};
const instTs = new nodeLiquibase.Liquibase(myConfig);
instTs.status();
instTs.update(null);

// Basic express setup:
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// API Swagger
swagger.initialize(app, envVar.SERVER_PORT);

// Routes
const mentorRoutes = require('./routes/mentor')();
const menteeRoutes = require('./routes/mentee')();
const meetingRoutes = require('./routes/meeting')();
const testRoutes = require('./routes/test')();

// Mount the backend routes at the "/api" path prefix:
app.use('/api/mentor', mentorRoutes);
app.use('/api/mentee', menteeRoutes);
app.use('/api/meeting', meetingRoutes);
app.use('/api', testRoutes);

app.listen(envVar.SERVER_PORT, () => {
  log.info('Meeter backend listening on port: ' + envVar.SERVER_PORT);
});
