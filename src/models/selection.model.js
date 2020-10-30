export default function Selection(sequelize, DataTypes) {
    return sequelize.define('selections', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        ranking: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
}