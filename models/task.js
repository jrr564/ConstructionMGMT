module.exports = function(sequelize, DataTypes) {
    var Tasks = sequelize.define("Tasks", {

        task_description: { 
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        status: {
            type: DataTypes.STRING,
            defaultValue: "Open"
        },

        created_by: {
            type: DataTypes.STRING,
            allowNull: false
        },

        issued: {
            type: DataTypes.STRING,
            allowNull: false
        },

        project: {
            type: DataTypes.STRING
        },

        created_date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        due_date: {
            type: DataTypes.DATE
        },

        completed_date: {
            type: DataTypes.DATE
        },

        attachment: {
            type: DataTypes.STRING
        }

    });

    Tasks.associate = function(models) {
        // Associating a Task to a User.  A Task can't be created without a User due to the foreign key constraint
        Tasks.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Tasks.belongsTo(models.Project, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Tasks;
}