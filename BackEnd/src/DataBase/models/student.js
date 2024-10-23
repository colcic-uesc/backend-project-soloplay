'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany( models.Skills, { foreignKey: 'studentSkillsFK' } )
      this.belongsToMany( models.Teacher, { 
        foreignKey: "studentId", // Definindo a chave estrangeira do aluno
        otherKey: "teacherId", // Definindo a chave estrangeira do professor
        through: "StudentTeacher", constraints: false 
      } )
    }
  }
  Student.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};