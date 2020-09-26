export default function Ballot(sequelize, DataTypes) {
    return sequelize.define('ballots', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ballotCode: {
            // only exists if election.emailBallots === true
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
}