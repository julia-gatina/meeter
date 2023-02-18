'use strict';

const mentorService = require('../services/mentor/mentorService');
const { apiErrorHandler } = require('../utils/common-utils');
const express = require('express');
const meeterRoutes = express.Router();

module.exports = function () {
  /**
   * @openapi
   * /api/mentor/all:
   *  get:
   *     tags:
   *     - Mentors
   *     summary: Gets all mentors
   *     description: Return all mentors
   *     responses:
   *       200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/MentorResponseDto'
   *       500:
   *        description: Internal server error
   */
  meeterRoutes.get('/mentor/all', function (req, res) {
    mentorService
      .findAll()
      .then((mentors) => {
        res.status(200).json(mentors);
      })
      .catch(apiErrorHandler(res));
  });

  return meeterRoutes;
};
