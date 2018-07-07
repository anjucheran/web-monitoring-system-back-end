import Sequelize from 'sequelize';

import constants from './constants';

const sequelize = new Sequelize(constants.DB, 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('MySQL Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync();

export default sequelize;
