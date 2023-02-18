'use strict';

const express = require('express');
const meeterRoutes = express.Router();

module.exports = function () {
  /**
   * @openapi
   * /api/healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     summary: Checks if the app is up and running
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  meeterRoutes.get('/healthcheck', (req, res) => res.sendStatus(200));

  /**
   * @openapi
   * /api/test:
   *  get:
   *     tags:
   *     - Healthcheck
   *     summary: Simple test Get endpoint
   *     responses:
   *       200:
   *         description: Test response text
   */
  meeterRoutes.get('/test', function (req, res) {
    res.status(200).send({ message: 'Test API works!' });
  });

  return meeterRoutes;
};
