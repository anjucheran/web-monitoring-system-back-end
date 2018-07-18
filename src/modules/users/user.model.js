import Sequelize from 'sequelize';
import { hashSync } from 'bcrypt-nodejs';

import sequelize from '../../config/database';

const User = sequelize.define('user', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
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

User.beforeSave((user, options) => {
    if (user.changed('password')) {
        user.password = user.hashPassword(user);
    }
});

User.prototype.hashPassword = (user) => {
    return hashSync(user.password);
};

export default User;
