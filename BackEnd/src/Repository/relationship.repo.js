const { StudentTeacher } = require("../DataBase/models");


module.exports = class relationshipRepo {

    async createRelationShip(teacherId, studentId) {  
  
      return await StudentTeacher.create({ teacherId, studentId });
  
    }
  
    async findAllRelationShip(){
  
      return await StudentTeacher.findAll();
  
    };
  
    async findRelationShipById(id) {
      
      await StudentTeacher.findById(
        {
          where: {
              id,
          },
      });
    }
  };