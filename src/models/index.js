import config from '../config/config';
import Sequelize from 'sequelize';

import Election from './election.model';
import Ballot from './ballot.model';

const user = config.database.db_user;
const pass = config.database.db_pass;
const schema = config.database.db_schema;
const host = config.server.hostname;

const sequelize = new Sequelize(schema, user, pass, {
    host,
    dialect: 'mysql',
})

const db = {
    sequelize,
    Sequelize,
}

db.elections = Election(sequelize, Sequelize);
db.ballots = Ballot(sequelize, Sequelize);

db.elections.hasMany(db.ballots, {as: 'ballots'});
db.ballots.belongsTo(db.elections, {
    foreignKey: 'electionId',
});

export default db;