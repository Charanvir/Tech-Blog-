const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
    // this will check password for each user that enters
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password)
    }
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
    },
    {
        // hooks: {
        //     async newUser(newUserInfo) {
        //         newUserInfo.password = await bcrypt.hash(newUserInfo.password, 15);
        //         return newUserInfo
        //     },
        //     async updateUser(existingUserInfo) {
        //         existingUserInfo.password = await bcrypt.hash(existingUserInfo.password, 15);
        //     }
        // },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;