'use strict';

const menteeService = require('../services/mentee/menteeService');
const { apiErrorHandler } = require('../utils/common-utils');
const express = require('express');
const menteeRoutes = express.Router();

module.exports = function () {
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
  menteeRoutes.get('/all', function (req, res) {
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
  menteeRoutes.get('/:id', function (req, res) {
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

  return menteeRoutes;
};
