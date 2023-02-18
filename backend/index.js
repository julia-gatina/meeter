'use strict';

/* imports */
const envVar = require('./env-vars');
const express = require('express');
const { log } = require('./tools/logger');

// Basic express setup:
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(envVar.SERVER_PORT, () => {
  log.info('Meeter backend listening on port ' + envVar.SERVER_PORT);
});
