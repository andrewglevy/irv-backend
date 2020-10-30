export default function Ballot(sequelize, DataTypes) {
    return sequelize.define('ballots', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        voterId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
}