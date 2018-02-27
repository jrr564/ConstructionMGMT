module.exports = function(sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", {

        project_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        completed_date: {
            type: DataTypes.STRING
        }
    });

    Projects.associate = function(models) {
        //Associating a Project to a User. 

        //has many tasks
        Projects.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Projects;
}