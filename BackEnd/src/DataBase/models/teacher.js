'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany( models.Project, { foreignKey: 'teacherProjectFK' } )
      this.belongsToMany( models.Student, { 
        foreignKey: "teacherId", // Definindo a chave estrangeira do professor
        otherKey: "studentId", // Definindo a chave estrangeira do aluno
        through: "StudentTeacher", 
        constraints: false 
      } )
    }
  }
  Teacher.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};