import config from '../config/config';
import Sequelize from 'sequelize';

import Election from './election.model';
import Ballot from './ballot.model';
import Candidate from './candidate.model';
import Selection from './selection.model';
import Voter from './voter.model';

const user = config.database.db_user;
const pass = config.database.db_pass;
const schema = config.database.db_schema;
const host = config.server.hostname;

const sequelize = new Sequelize(schema, user, pass, {
    host,
    dialect: 'mysql',
    logging: false,
})

const db = {
    sequelize,
    Sequelize,
}

db.elections = Election(sequelize, Sequelize);
db.ballots = Ballot(sequelize, Sequelize);
db.candidates = Candidate(sequelize, Sequelize);
db.selections = Selection(sequelize, Sequelize);
db.voters = Voter(sequelize, Sequelize);

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

// voters
db.elections.hasMany(db.voters, { as: 'voters' });
db.voters.belongsTo(db.elections, { foreignKey: 'electionId' });



export default db;