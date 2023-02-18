'use strict';

const mentorService = require('../services/mentor/mentorService');
const { apiErrorHandler } = require('../utils/common-utils');
const express = require('express');
const mentorRoutes = express.Router();

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
  mentorRoutes.get('/all', function (req, res) {
    mentorService
      .findAll()
      .then((mentors) => {
        res.status(200).json(mentors);
      })
      .catch(apiErrorHandler(res));
  });

  /**
   * @openapi
   * /api/mentor/{id}:
   *  get:
   *     tags:
   *     - Mentors
   *     summary: Gets a mentor
   *     description: Returns a mentor
   *     parameters:
   *      - name: id
   *        in: path
   *        description: Mentor id
   *        required: true
   *        schema:
   *          type: string
   *     responses:
   *       200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/MentorResponseDto'
   *       500:
   *        description: Internal server error
   *       404:
   *        description: Not found
   *       400:
   *        description: invalid request no ID in request
   */
  mentorRoutes.get('/:id', function (req, res) {
    const mentorId = req.params.id;
    if (!mentorId) {
      res.status(400).json({ error: 'invalid request: no mentor ID in GET request' });
      return;
    }

    mentorService
      .getMentorById(mentorId)
      .then((mentor) => {
        if (mentor) {
          res.status(200).json(mentor);
        } else {
          res.sendStatus(404);
        }
      })
      .catch(apiErrorHandler(res));
  });

  return mentorRoutes;
};
