import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Package } from '../../types/Package';

export type PackageInputtableFields = Optional<Package, 'id'>;
export type PackageSequelizeModel = Model<Package, PackageInputtableFields>;
type PackageSequelizeModelCreator = ModelDefined<Package, PackageInputtableFields>;

const PackageModel: PackageSequelizeModelCreator = db.define('Package', {
  destination: DataTypes.STRING,
  category: DataTypes.STRING,
  price: DataTypes.DECIMAL,
}, {
  tableName: 'packages',
  timestamps: false,
  underscored: true,
});

export default PackageModel;