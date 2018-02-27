module.exports = function(sequelize, DataTypes) {
    var Updates = sequelize.define("Updates", {
        // revision_id: {
        //     type: DataTypes.INTEGER,
        //     primarykey: true
        // },
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