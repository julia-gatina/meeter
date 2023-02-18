'use strict';

const { Mentee } = require('../../models');
const { errorHandler } = require('../../utils/common-utils');

const findAll = () => {
  return Mentee.findAll().catch(errorHandler);
};

/**
 * Find a Mentee by id
 */
const getMenteeById = (id) => {
  return Mentee.findOne({ where: { id: id } }).catch(errorHandler);
};

const create = (mentee) => {
  return Mentee.create(mentee).catch(errorHandler);
};

module.exports = {
  findAll,
  getMenteeById,
  create
};
