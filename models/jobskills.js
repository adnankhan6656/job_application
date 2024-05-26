'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobSkills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    // JobSkills.belongsTo(models.Job, { foreignKey: 'job_id' });
    // //  JobSkills.belongsTo(models.Skill, { foreignKey: 'skill_id' });
    // JobSkills.belongsTo(models.Skills,{foreignKey:'skill_id'})
    }
  }
  JobSkills.init({
    job_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'Job',
        key:'id'
      }
    },
    skill_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'Skills',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'JobSkills',
  });
  return JobSkills;
};