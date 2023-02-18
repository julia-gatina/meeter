'use strict';

const { Mentor } = require('../../models');
const { errorHandler } = require('../../utils/common-utils');

const findAll = () => {
  return Mentor.findAll().catch(errorHandler);
};

const create = (mentor) => {
  return Mentor.create(mentor).catch(errorHandler);
};

module.exports = {
  findAll,
  create
};
