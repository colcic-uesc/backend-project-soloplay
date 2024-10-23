'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentTeacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo( models.Teacher, { foreignKey: { name: "teacherId" } } );
      this.belongsTo( models.Student, { foreignKey: { name: "studentId" } } );
    }
  }
  StudentTeacher.init({
    studentId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentTeacher',
  });
  return StudentTeacher;
};