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

    return Updates;
}