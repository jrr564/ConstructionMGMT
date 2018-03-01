module.exports = function(sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", {

        project_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        completed_date: {
            type: DataTypes.STRING
        }
    });


      return Projects
    }
