export default function Ballot(sequelize, DataTypes) {
    return sequelize.define('ballots', {
        name: {
            type: DataTypes.STRING
        }
    });
}