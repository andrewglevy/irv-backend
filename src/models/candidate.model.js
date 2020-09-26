export default function Candidate(sequelize, DataTypes) {
    return sequelize.define('candidates', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
}