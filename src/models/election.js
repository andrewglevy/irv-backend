import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Election = sequelize.define('elections', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING
    }
});

export default Election;