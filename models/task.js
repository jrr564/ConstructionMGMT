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
            type: DataTypes.ENUM,
            values: ["Open", "Closed", "Ready to Inspect", "Not Approved"],
            defaultValue: "Open"
        },

        created_by_user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },

        assigned_to_user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },

        project_id: {
            type: DataTypes.STRING
        },

        created_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        // createdAt: Sequelize.DATE,
        // updatedAt: Sequelize.DATE,

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
        Tasks.belongsTo(models.Projects, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Tasks;
}