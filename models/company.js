'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.Job,{foreignKey:'company_id'});
      models.Job.belongsTo(Company,{foreignKey:'company_id'});
    }
  }
  Company.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};