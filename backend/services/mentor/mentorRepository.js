'use strict';

const { Mentor } = require('../../models');
const { errorHandler } = require('../../utils/common-utils');

const findAll = () => {
  return Mentor.findAll().catch(errorHandler);
};

/**
 * Find a mentor by id
 */
const getMentorById = (id) => {
  return Mentor.findOne({ where: { id: id } }).catch(errorHandler);
};

const create = (mentor) => {
  return Mentor.create(mentor).catch(errorHandler);
};

module.exports = {
  findAll,
  getMentorById,
  create
};
