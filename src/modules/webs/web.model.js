import Sequelize from 'sequelize';

import sequelize from '../../config/database';
import User from '../users/user.model';

const Web = sequelize.define('web', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isUrl: {
                args: true,
                msg: 'This is not a valid URL!',
            }
        },
    },
    requestType: {
        type: Sequelize.ENUM,
        values: ['head', 'get'],
        defaultValue: 'get',
    },
    period: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    httpStatus: {
        type: Sequelize.INTEGER,
        defaultValue: 200,
    }
}, { timestamps: false });

Web.belongsTo(User, { onDelete: 'cascade', onUpdate: 'cascade' });

export default Web;