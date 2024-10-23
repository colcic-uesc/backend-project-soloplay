'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentTeachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: 'Students',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      teacherId: {
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: 'Teachers',
          key: 'id'
        },
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('StudentTeachers');
  }
};