const { Project } = require("../DataBase/models");


module.exports = class studentRepo {

  async createProject(teacherId, name, description) {  

    return await Project.create({ teacherId, name, description });

  }

  async findAllProject(){

    return await Project.findAll();

  };

  async findProjectById(id) {
    
    await Project.findById(
      {
        where: {
            id,
        },
    });
  }

  async updateProject(id, name, description) {

    return await Project.update(
    
      {
        name: name ? name : Project.name,
        description: description ? description : Project.description
      },
      {
        where: {
            id,
        },
    });
    
  }

  async deleteProjectById(id) {
    
    await Project.destroy(
      {
        where: {
            id,
        },
    });
  }
};
