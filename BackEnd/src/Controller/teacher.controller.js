const teacherRepository = require("../Repository/teacher.repo");
const projectRepository = require("../Repository/project.repo");
const repo = new teacherRepository();
const prorepo = new projectRepository();

module.exports = class studentController {

  async createTeacher(request, response) {

    const teacher = request.body;
    const project = teacher.project;
  
    try{        

        if( teacher != null ){

          const resultTeatcher = await repo.createTeacher(teacher);
          console.log("Result: ",resultTeatcher.dataValues.id)
          // await project.find((element) => {
          //   console.log(element)
          //   prorepo.createProject(resultTeatcher.dataValues.id, element.name, element.description)
          // })

          return response.status(201).json({ result: teacher });

        }else{
          return response.status(400).json({ "result" : "something is wrong" })
        }
  
    }catch(erro){
      console.log(erro)
        return response.status(500).json({"erro" : erro})
    }
  
  }

  async findById( id ) {
  
    try{

      const result = await repo.findTeacherById( id )
      if( result ){
        return response.status( 201 ).json( { "result" : result } )
      }else{
        return response.status( 400 ).json( { "result" : "Not Exits Or Data Invalid" } )
      }
  
    }catch(erro){

      return null

    }

  }

  async updateTeacher( request, response ) {

    const teacher = request.body;
  
    try{        
        const result = await repo.update( teacher );
        if( result ){
          return response.status( 201 ).json( { "result" : result } )
        }else{
          return response.status( 400 ).json( { "result" : "Not Exits Or Data Invalid" } )
        }
  
    }catch( erro ){
        return response.status( 400 ).json({"erro" : "Not Exits Or Data Invalid"});
    }
  
  }

  async deleteTeacherId(request, response) {

    const { id } = request.query;

    try{        
        const result = await repo.deleteTeacherById(id);
        if( result ){
          return response.status(201).json({ "result" : "Removed" })
        }else{
          return response.status(400).json({ "result" : "Not Exits" })
        }
  
    }catch(erro){
        return response.status(500).json({"erro" : erro})
    }
  
  }

  async getAllTeacher( request, response ) {
  
    try{

      const result = await repo.findAllTeacher()
      if( result ){
        return response.status(201).json({ "result" : "Removed" })
      }else{
        return response.status(400).json({ "result" : "Not Exits" })
      }
  
    }catch(erro){

      return response.status(500).json( { "erro" : erro } )

    }

  }

}
