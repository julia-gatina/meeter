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
 * Create new Mentor
 */
const create = async (newMentor) => {
  const createdMentor = await mentorRepository.create(newMentor);
  return createdMentor;
};

module.exports = {
  findAll,
  create
};
