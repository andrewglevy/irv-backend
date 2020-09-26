export default function Selection(sequelize, DataTypes) {
    return sequelize.define('selections', {
        ranking: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
}