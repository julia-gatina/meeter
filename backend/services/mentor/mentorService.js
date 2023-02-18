'use strict';

const mentorRepository = require('./mentorRepository');

/**
 * Get Mentor list
 */
const findAll = async () => {
  const allMentors = await mentorRepository.findAll();
  return allMentors;
};

/**
 * Get a mentor by id
 */
const getMentorById = async (id) => {
  return await mentorRepository.getMentorById(id);
};

/**
 * Create new Mentor
 */
const create = async (newMentor) => {
  const createdMentor = await mentorRepository.create(newMentor);
  return createdMentor;
};

module.exports = {
  findAll,
  getMentorById,
  create
};
