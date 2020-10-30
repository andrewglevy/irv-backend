export default function Election(sequelize, DataTypes) {
    return sequelize.define('elections', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
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
        anonymous: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        electionCode: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        emailBallots: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        // if null, election will be closed manually
        // save in utc
        dateToClose: {
            type: DataTypes.DATE,
            allowNull: true,

        }

    });
}