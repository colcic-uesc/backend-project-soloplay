'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.belongsTo(models.Student, { 
        foreignKey: {
          name: 'studentSkillsFK',  // Nome da chave estrangeira (alias)
          field: 'studentId'         // Nome da coluna no banco de dados
        },
        constraints: false           // Se você quer desativar as constraints (opcional)
      });
      
    }
  }
  Skills.init({
    studentId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Skills',
  });
  return Skills;
};