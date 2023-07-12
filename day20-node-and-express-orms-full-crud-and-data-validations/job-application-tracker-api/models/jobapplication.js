'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobApplication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobApplication.init({
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: DataTypes.STRING,
    minSalary: DataTypes.INTEGER,
    maxSalary: DataTypes.INTEGER,
    location: DataTypes.STRING,
    postDate: DataTypes.DATE,
    jobPostUrl: DataTypes.STRING,
    applicationDate: DataTypes.DATE,
    lastContactDate: DataTypes.DATE,
    companyContact: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobApplication',
    tableName: 'job_applications',
    underscored: true
  });
  return JobApplication;
};