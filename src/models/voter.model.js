export default function Voter(sequelize, DataTypes) {
    return sequelize.define('voters', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: { isEmail: true }
        },
        whenVoted: {
            type: DataTypes.DATE,
            allowNull: true
        },
        voterCode: {
            // only exists if election.emailBallots === true, else voter will use election code
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        }
    });
}