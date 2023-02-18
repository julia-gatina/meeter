'use strict';

const meetingService = require('../services/meeting/meetingService');
const { apiErrorHandler } = require('../utils/common-utils');
const express = require('express');
const meetingRoutes = express.Router();

module.exports = function () {
  /**
   * @openapi
   * /api/meeting/all:
   *  get:
   *     tags:
   *     - Meetings
   *     summary: Gets all Meetings
   *     description: Return all Meetings
   *     responses:
   *       200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/MeetingResponseDto'
   *       500:
   *        description: Internal server error
   */
  meetingRoutes.get('/all', function (req, res) {
    meetingService
      .findAll()
      .then((meetings) => {
        res.status(200).json(meetings);
      })
      .catch(apiErrorHandler(res));
  });

  /**
   * @openapi
   * /api/meeting/{id}:
   *  get:
   *     tags:
   *     - Meetings
   *     summary: Gets a meeting
   *     description: Returns a meeting
   *     parameters:
   *      - name: id
   *        in: path
   *        description: Meeting id
   *        required: true
   *        schema:
   *          type: string
   *     responses:
   *       200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/MeetingResponseDto'
   *       500:
   *        description: Internal server error
   *       404:
   *        description: Not found
   *       400:
   *        description: invalid request no ID in request
   */
  meetingRoutes.get('/:id', function (req, res) {
    const meetingId = req.params.id;
    if (!meetingId) {
      res.status(400).json({ error: 'invalid request: no meeting ID in GET request' });
      return;
    }

    meetingService
      .getById(meetingId)
      .then((meeting) => {
        if (meeting) {
          res.status(200).json(meeting);
        } else {
          res.sendStatus(404);
        }
      })
      .catch(apiErrorHandler(res));
  });

  return meetingRoutes;
};
