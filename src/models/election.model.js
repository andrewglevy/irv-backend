export default function Election(sequelize, DataTypes) {
    return sequelize.define('elections', {
        name: {
            type: DataTypes.STRING
        }
    });
}