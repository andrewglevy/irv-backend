import Sequelize from 'sequelize';
import config from '../config/config';

const user = config.database.db_user;
const pass = config.database.db_pass;
const schema = config.database.db_schema;
const host = config.server.hostname;

export const sequelize = new Sequelize(schema, user, pass, {
    host,
    dialect: 'mysql',
});

sequelize.authenticate().then(() => {
    console.log('conntected to database.');

}).catch(err => {
    console.err('Unable to connect to the database:', err);
});