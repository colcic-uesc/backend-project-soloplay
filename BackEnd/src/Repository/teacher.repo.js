const { Teacher, Project } = require("../DataBase/models");
const project = require("../DataBase/models/project");


module.exports = class studentRepo {

  async createTeacher(teacher) {  

    console.log(teacher.project[0])
    return await Teacher.create({ 
      
      name: teacher.name,
      email: teacher.email,
      project: {
        name: teacher.project[0].name,
        description: teacher.project[0].description
      }
     },
     {
        include: [
          {
            association: [Project],
          },
        ],
      }
    );

  }

  async findAllTeacher(){

    return await Teacher.findAll();

  };

  async findTeacherById(id) {
    
    await Teacher.findById(
      {
        where: {
            id,
        },
    });
  }

  async updateTeacher(id, name, email) {

    return await Teacher.update(
    
      {
        name: name ? name : Teacher.name,
        email: email ? email : Teacher.email
      },
      {
        where: {
            id,
        },
    });
    
  }

  async deleteTeacherById(id) {
    
    await Teacher.destroy(
      {
        where: {
            id,
        },
    });
  }
};
