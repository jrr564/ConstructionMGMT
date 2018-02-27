module.exports = function (sequelize, DataTypes) {
  var Projects = sequelize.define('Projects', {
    project_id: {
      type: DataTypes.INTEGER,
      primarykey: true
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    completed_date: {
      type: DataTypes.STRING
    }
  })

  Projects.associate = function (models) {
    // Associating a Project to a User. 
    Projects.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Projects
}
