module.exports = function(sequelize, DataTypes) {
    var Updates = sequelize.define("Updates", {
        revision_id: {
            type: DataTypes.INTEGER,
            primarykey: true
        },
        comment: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
        attachment: {
            ///////////
        }
    });

    return Updates;
}