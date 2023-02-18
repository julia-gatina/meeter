'use strict';

const meetingService = require('../services/meeting/meetingService');
const mentorService = require('../services/mentor/mentorService');
const menteeService = require('../services/mentee/menteeService');
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

  /**
   * @openapi
   * /api/meeting:
   *  post:
   *     tags:
   *     - Meetings
   *     summary: Create new a Meeting
   *     description: Create new a Meeting
   *     requestBody:
   *         description: Create a new Meeting
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/PostMeetingRequestDto'
   *         required: true
   *     responses:
   *       200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/MeetingResponseDto'
   *       500:
   *        description: Internal server error
   *       400:
   *        description: Invalid request
   */
  meetingRoutes.post('/', async function (req, res) {
    const meetingDto = req.body;
    if (!meetingDto) {
      res.status(400).json({ error: 'invalid request: no meeting data in POST body' });
      return;
    }

    let mentorId = meetingDto.mentorId;
    if (!mentorId) {
      res.status(400).json({ error: 'invalid request: no mentorId' });
      return;
    }

    const mentorById = await mentorService.getMentorById(mentorId);
    if (!mentorById) {
      res.status(400).json({ error: 'Mentor with mentorId does not exist' });
      return;
    }

    const menteeId = meetingDto.menteeId;
    if (!menteeId) {
      res.status(400).json({ error: 'invalid request: no menteeId' });
      return;
    }

    const menteeById = await menteeService.getMenteeById(menteeId);
    if (!menteeById) {
      res.status(400).json({ error: 'Mentee with menteeId does not exist' });
      return;
    }

    if (!meetingDto.appointment) {
      res.status(400).json({ error: 'invalid request: no appointment' });
      return;
    }

    meetingService
      .create(meetingDto)
      .then((savedMeeting) => {
        res.status(200).json(savedMeeting);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });

  /**
   * @openapi
   * /api/meeting/{id}:
   *  delete:
   *     tags:
   *     - Meetings
   *     summary: Delete a Meeting
   *     description: Delete a Meeting
   *     parameters:
   *      - name: id
   *        in: path
   *        description: Meeting id
   *        required: true
   *        schema:
   *          type: string
   *     responses:
   *       204:
   *        description: Success, no content
   *       500:
   *        description: Internal server error
   *       404:
   *        description: Not found
   *       400:
   *        description: invalid request no meeting ID in DELETE request
   */
  meetingRoutes.delete('/:id', function (req, res) {
    const meetingId = req.params.id;
    if (!meetingId) {
      res.status(400).json({ error: 'invalid request: no meeting ID in DELETE request' });
      return;
    }

    meetingService
      .deleteById(meetingId)
      .then((successfullyDeleted) => {
        if (successfullyDeleted) {
          res.status(204).end();
        } else {
          res.status(404).end();
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });

  return meetingRoutes;
};
