'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Meeting = sequelize.define(
    'Meeting',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      mentor_id: {
        type: DataTypes.UUID
      },
      mentee_id: {
        type: DataTypes.UUID,
        references: 'mentee',
        referencesKey: 'id'
      },
      appointment: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      created_at: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'meeting',
      timestamps: false
    }
  );

  Meeting.associate = (models) => {
    Meeting.belongsTo(models['Mentee'], {
      allowNull: false,
      foreignKey: 'mentee_id',
      as: 'mentee'
    });

    Meeting.belongsTo(models['Mentor'], {
      allowNull: false,
      foreignKey: 'mentor_id',
      as: 'mentor'
    });
  };

  return Meeting;
};
