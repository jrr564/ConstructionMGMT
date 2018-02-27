module.exports = function (sequelize, DataTypes) {
  var Tasks = sequelize.define('Tasks', {
    task_id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      allowNull: false
    },

    task_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: 'Open'
    },

    issued: {
      type: DataTypes.STRING,
      allowNull: false
    },

    created_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },

    due_date: {
      type: DataTypes.DATE
    },

    completed_date: {
      type: DataTypes.DATE
    }
  })

  Tasks.associate = function (models) {
    // Associating a Task to a User.  A Task can't be created without a User due to the foreign key constraint
    Tasks.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Tasks
}
