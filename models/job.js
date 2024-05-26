'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.hasMany(models.Application,{foreignKey:'job_id'});
      Job.belongsToMany(models.Skills,{through:models.JobSkills,foreignKey:'job_id',onDelete:'CASCADE'},);
      models.Skills.belongsToMany(Job,{through:models.JobSkills,foreignKey:'skill_id',onDelete:'CASCADE'})
    
    }
  }
  Job.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    salary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};