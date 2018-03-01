module.exports = function(sequelize, DataTypes) {
    var Tasks = sequelize.define("Tasks", {

        task_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        status: {
            type: DataTypes.ENUM,
            values: ["Open", "Closed", "Ready to Inspect", "Not Approved"],
            defaultValue: "Open"
        },

        createdBy_id: {
            type: DataTypes.STRING,
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
        // Sequelize will automatically create a UserId field that will associate task with User it has been assigned to
        Tasks.belongsTo(models.User, {
            foreignKey: {
                name: 'AssignedTo_Id',
                allowNull: false
            }
        });
        // Sequelize will automatically create a ProjectId field that will associate task with Project it has been assigned to
        Tasks.belongsTo(models.Projects, {
            foreignKey: {
                allowNull: false
            }
        });
      }
      return Tasks
    }
