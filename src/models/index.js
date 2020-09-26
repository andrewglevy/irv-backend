import config from '../config/config';
import Sequelize from 'sequelize';

import Election from './election.model';
import Ballot from './ballot.model';
import Candidate from './candidate.model';
import Selections from './selection.model';

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
db.candidates = Candidate(sequelize, Sequelize);
db.selections = Selections(sequelize, Sequelize);

// associations

// ballots
db.elections.hasMany(db.ballots, { as: 'ballots' });
db.ballots.belongsTo(db.elections, { foreignKey: 'electionId' });

// candidates
db.elections.hasMany(db.candidates, { as: 'candidates' });
db.candidates.belongsTo(db.elections, { foreignKey: 'electionId' });

//selections
db.candidates.hasMany(db.selections, { as: 'selections' });
db.selections.belongsTo(db.candidates, { foreignKey: 'candidateId' });
db.ballots.hasMany(db.selections, { as: 'selections' });
db.selections.belongsTo(db.ballots, { foreignKey: 'ballotId' });



export default db;