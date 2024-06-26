import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { User } from '../../types/User';

export type UserInputtableFields = Optional<User, 'id'>;
export type UserSequelizeModel = Model<User, UserInputtableFields>;
type UserSequelizeModelCreator = ModelDefined<User, UserInputtableFields>;

const UserModel: UserSequelizeModelCreator = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;