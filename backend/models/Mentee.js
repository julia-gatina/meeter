'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Mentee = sequelize.define(
    'Mentee',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      title: {
        type: DataTypes.STRING
      },
      company: {
        type: DataTypes.STRING
      },
      experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      expertise: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: 'mentee',
      timestamps: false
    }
  );

  Mentee.associate = (models) => {
    Mentee.hasMany(models['Meeting'], {
      foreignKey: 'mentee_id',
      as: 'meetings'
    });
  };

  return Mentee;
};
