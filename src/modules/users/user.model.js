import Sequelize from 'sequelize';

import sequelize from '../../config/database';

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                args: true,
                msg: 'Email is not valid!',
            }
        },
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
                msg: 'Password is invalid',
            },
        }
    }
}, { timestamps: false });

export default User;
