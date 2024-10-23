const { Teacher, Project } = require("../DataBase/models");


module.exports = class studentRepo {

  async createTeacher(teacher) {  

    return await Teacher.create({
      name: teacher.name,
      email: teacher.email,
      Projects: teacher.Projects, // A lista de projetos relacionada ao professor
      },
      {
        include: [
          {
            model: Project, // Inclui o modelo relacionado
          },
        ],
      }
    );

  }

  async findAllTeacher(){

    return await Teacher.findAll({
      include: [{
        model: Project,
        attributes: [ 'name', 'description' ]
      }]
    });

  };

  async findTeacherById(id) {
    return await Teacher.findByPk(
      {
        where: {
            id,
        },
      }, {
      include: [Project], // Inclui o relacionamento com Project
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
    
    return await Teacher.destroy(
      {
        where: {
            id,
        },
    });
  }
};
