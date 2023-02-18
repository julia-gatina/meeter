'use strict';

const { Mentor } = require('../../models');
const { errorHandler } = require('../../utils/common-utils');

const findAll = () => {
  return Mentor.findAll().catch((e) => errorHandler(e));
};

/**
 * Find a mentor by id
 */
const getMentorById = (id) => {
  return Mentor.findOne({ where: { id: id } }).catch((e) => errorHandler(e));
};

const create = (mentor) => {
  return Mentor.create(mentor).catch((e) => errorHandler(e));
};

module.exports = {
  findAll,
  getMentorById,
  create
};
