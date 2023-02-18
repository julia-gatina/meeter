'use strict';

const { Mentee } = require('../../models');
const { errorHandler } = require('../../utils/common-utils');

const findAll = () => {
  return Mentee.findAll().catch((e) => errorHandler(e));
};

/**
 * Find a Mentee by id
 */
const getMenteeById = (id) => {
  return Mentee.findOne({ where: { id: id } }).catch((e) => errorHandler(e));
};

const create = (mentee) => {
  return Mentee.create(mentee).catch((e) => errorHandler(e));
};

module.exports = {
  findAll,
  getMenteeById,
  create
};
