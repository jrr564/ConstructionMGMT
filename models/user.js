module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  User.associate = function(models) {
    //Associating a Project to a User. 

    User.hasMany(models.Tasks, {
        foreignKey: {
            allowNull: false
        }
    });
  }

  return User
}
