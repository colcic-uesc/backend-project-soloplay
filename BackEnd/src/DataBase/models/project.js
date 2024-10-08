'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Teacher, { 
        foreignKey: { name: "teacherProjectFK", field: "teacherId", constraints: false  } // chave estrangeira
        
      });
    }
  }
  Project.init({
    teacherId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  ;return Project;
}