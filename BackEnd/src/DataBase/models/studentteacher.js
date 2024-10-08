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
      this.belongsToMany( models.Teachers, { foreignKey: { name: "teacherFK", target: "teacherId" }, constraints: true,  } );
      this.belongsToMany( models.Students, { foreignKey: { name: "studentFK", target: "studentId"}, constraints: true } );
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