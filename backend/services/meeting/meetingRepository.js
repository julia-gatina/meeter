'use strict';

const { Meeting } = require('../../models');
const { errorHandler } = require('../../utils/common-utils');

const findAll = () => {
  return Meeting.findAll().catch((e) => errorHandler(e));
};

/**
 * Find a Meeting by id
 */
const getById = (id) => {
  return Meeting.findOne({ where: { id: id } }).catch((e) => errorHandler(e));
};

const create = (meeting) => {
  return Meeting.create(meeting).catch((e) => errorHandler(e));
};

/**
 * Deletes a meeting by id
 */
const deleteById = (id) => {
  return Meeting.destroy({ where: { id: id } }).catch((e) => errorHandler(e));
};

module.exports = {
  findAll,
  getById,
  create,
  deleteById
};
