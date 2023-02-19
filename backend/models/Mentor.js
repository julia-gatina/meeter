'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Mentor = sequelize.define(
    'Mentor',
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
      avatar: {
        type: DataTypes.STRING
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
      tableName: 'mentor',
      timestamps: false
    }
  );

  Mentor.associate = (models) => {
    Mentor.hasMany(models['Meeting'], {
      foreignKey: 'mentor_id',
      as: 'meetings'
    });
  };

  return Mentor;
};
