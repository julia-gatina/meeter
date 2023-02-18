'use strict';

const { v4: uuidv4 } = require('uuid');
const meetingRepository = require('./meetingRepository');
const meetingBaseUrl = 'https://meet.google.com';

/**
 * Get Meeting list
 */
const findAll = async () => {
  const allMeetings = await meetingRepository.findAll();
  return allMeetings ? allMeetings.map((dbMeeting) => dbMeetingToDto(dbMeeting)) : [];
};

/**
 * Get a Meeting by id
 */
const getById = async (id) => {
  const meeting = await meetingRepository.getById(id);
  return meeting ? dbMeetingToDto(meeting) : null;
};

/**
 * Create new Meeting
 */
const deleteById = (id) => {
  return meetingRepository.deleteById(id);
};

/**
 * Create new Meeting
 */
const create = async (newMeeting) => {
  const dbMeeting = dtoMeetingToDb(newMeeting);
  const createdMeeting = await meetingRepository.create(dbMeeting);
  return createdMeeting ? dbMeetingToDto(createdMeeting) : null;
};

function dbMeetingToDto(dbMeeting) {
  const dto = {
    id: dbMeeting.id,
    mentorId: dbMeeting.mentor_id,
    menteeId: dbMeeting.mentee_id,
    appointment: dbMeeting.appointment,
    url: `${meetingBaseUrl}?id=${dbMeeting.id}`,
    createdAt: dbMeeting.created_at
  };
  return dto;
}

function dtoMeetingToDb(meeting) {
  const dbMeeting = {
    id: uuidv4(),
    mentor_id: meeting.mentorId,
    mentee_id: meeting.menteeId,
    appointment: meeting.appointment,
    created_at: new Date()
  };
  return dbMeeting;
}

module.exports = {
  findAll,
  getById,
  create,
  deleteById
};
