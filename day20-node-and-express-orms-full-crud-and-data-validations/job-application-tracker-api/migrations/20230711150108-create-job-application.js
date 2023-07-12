'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JobApplications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      minSalary: {
        type: Sequelize.INTEGER
      },
      maxSalary: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      postDate: {
        type: Sequelize.DATE
      },
      jobPostUrl: {
        type: Sequelize.STRING
      },
      applicationDate: {
        type: Sequelize.DATE
      },
      lastContactDate: {
        type: Sequelize.DATE
      },
      companyContact: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JobApplications');
  }
};