export default function Candidate(sequelize, DataTypes) {
    return sequelize.define('candidates', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
}