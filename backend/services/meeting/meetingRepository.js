'use strict';

const { Meeting } = require('../../models');
const { errorHandler } = require('../../utils/common-utils');

const findAll = () => {
  return Meeting.findAll().catch(errorHandler);
};

/**
 * Find a Meeting by id
 */
const getById = (id) => {
  return Meeting.findOne({ where: { id: id } }).catch(errorHandler);
};

const create = (meeting) => {
  return Meeting.create(meeting).catch(errorHandler);
};

module.exports = {
  findAll,
  getById,
  create
};
