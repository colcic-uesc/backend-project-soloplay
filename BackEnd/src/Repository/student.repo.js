const { Student, Skills } = require("../DataBase/models");


module.exports = class studentRepo {

  async createStudent(student) {  

    return await Student.create({
      name: student.name,
      email: student.email,
      Skills: student.Skills, // A lista de projetos relacionada ao professor
      },
      {
        include: [
          {
            model: Skills, // Inclui o modelo relacionado
          },
        ],
      }
    );

  }

  async findAllStudent(){

    return await Student.findAll({
      include: [{
        model: Skills,
        attributes: [ 'name', 'description' ]
      }]
    });

  };

  async findStudentById(id) {
    return await Student.findByPk(id, {
      include: [Skills], // Inclui o relacionamento com Project
    });
  }

  async updateStudent(id, name, email) {

    return await Student.update(
    
      {
        name: name ? name : Student.name,
        email: email ? email : Student.email
      },
      {
        where: {
            id,
        },
    });
    
  }

  async deleteStudent(id) {
    
    return await Student.destroy(
      {
        where: {
            id,
        },
    });
  }
};
