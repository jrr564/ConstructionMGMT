module.exports = function(sequelize, DataTypes) {
    var Updates = sequelize.define("Updates", {

        user: {
            type: DataTypes.STRING
        }, 
        comment: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
        attachment: {
            type: DataTypes.STRING
        }
    });

    Updates.associate = function(models) {

        Updates.hasMany(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Updates;
}