const { Skills } = require("../DataBase/models");


module.exports = class studentRepo {

  async createSkills(studentId, name, description) {  

    return await Skills.create({ studentId, name, description });

  }

  async findAllSkills(){

    return await Skills.findAll();

  };

  async findSkillsById(id) {
    
    await Skills.findById(
      {
        where: {
            id,
        },
    });
  }

  async updateSkills(id, name, description) {

    return await Skills.update(
    
      {
        name: name ? name : Skills.name,
        description: description ? description : Skills.description
      },
      {
        where: {
            id,
        },
    });
    
  }

  async deleteSkillsById(id) {
    
    await Skills.destroy(
      {
        where: {
            id,
        },
    });
  }
};
