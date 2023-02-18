'use strict';

const mentorService = require('../services/mentor/mentorService');
const menteeService = require('../services/mentee/menteeService');
const { apiErrorHandler } = require('../utils/common-utils');
const express = require('express');
const meeterRoutes = express.Router();

module.exports = function () {
  // region: Mentor

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
  meeterRoutes.get('/mentor/:id', function (req, res) {
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

  // endregion

  // region: Mentee

  /**
   * @openapi
   * /api/mentee/all:
   *  get:
   *     tags:
   *     - Mentees
   *     summary: Gets all Mentees
   *     description: Return all Mentees
   *     responses:
   *       200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/MenteeResponseDto'
   *       500:
   *        description: Internal server error
   */
  meeterRoutes.get('/mentee/all', function (req, res) {
    menteeService
      .findAll()
      .then((mentees) => {
        res.status(200).json(mentees);
      })
      .catch(apiErrorHandler(res));
  });

  /**
   * @openapi
   * /api/mentee/{id}:
   *  get:
   *     tags:
   *     - Mentees
   *     summary: Gets a mentee
   *     description: Returns a mentee
   *     parameters:
   *      - name: id
   *        in: path
   *        description: Mentee id
   *        required: true
   *        schema:
   *          type: string
   *     responses:
   *       200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/MenteeResponseDto'
   *       500:
   *        description: Internal server error
   *       404:
   *        description: Not found
   *       400:
   *        description: invalid request no ID in request
   */
  meeterRoutes.get('/mentee/:id', function (req, res) {
    const menteeId = req.params.id;
    if (!menteeId) {
      res.status(400).json({ error: 'invalid request: no mentee ID in GET request' });
      return;
    }

    menteeService
      .getMenteeById(menteeId)
      .then((mentee) => {
        if (mentee) {
          res.status(200).json(mentee);
        } else {
          res.sendStatus(404);
        }
      })
      .catch(apiErrorHandler(res));
  });

  // endregion

  return meeterRoutes;
};
