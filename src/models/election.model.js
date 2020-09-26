export default function Election(sequelize, DataTypes) {
    return sequelize.define('elections', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        open: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        electionCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emailBallots: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        autoClose: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },

    });
}