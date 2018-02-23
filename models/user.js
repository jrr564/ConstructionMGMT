const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('users', {
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
      }
    })

    User.prototype.generateHash = function (password) {
      return bcrypt.hash(password, bcrypt.genSaltSync(8))
    }

    User.prototype.validPassword = function (password) {
      return bcrypt.compare(password, this.password)
    }
    
    return User;
}
