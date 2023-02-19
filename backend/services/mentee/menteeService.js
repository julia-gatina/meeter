'use strict';

const menteeRepository = require('./menteeRepository');
const mentorService = require('../mentor/mentorService');

/**
 * Get Mentee list
 */
const findAll = async () => {
  const allMentees = await menteeRepository.findAll();
  return allMentees;
};

/**
 * Get a Mentee by id
 */
const getMenteeById = async (id) => {
  return await menteeRepository.getMenteeById(id);
};

/**
 * Create new Mentee
 */
const create = async (newMentee) => {
  const createdMentee = await menteeRepository.create(newMentee);
  return createdMentee;
};

module.exports = {
  findAll,
  getMenteeById,
  create
};
