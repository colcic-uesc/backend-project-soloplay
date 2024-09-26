const teacherRepository = require("../Repository/teacher.repo");
const repo = new teacherRepository()

module.exports = class studentController {

  async createTeacher(request, response) {

    const teacher = request.body;
  
    try{        

        if( teacher != null ){

          const result = repo.create(teacher);
          return response.status(201).json({ result: teacher });
        }else{
          return response.status(400).json({ "result" : "something is wrong" })
        }
  
    }catch(erro){

      console.log(erro)
        return response.status(500).json({"erro" : erro})
    }
  
  }

  async findAll( request, response ) {

    try{

      const result = await emailRepo.findAll();
      return response.status( 201 ).json( result );

    }catch( e ){

      console.log(e)

    }

  }

  findById( data ) {
  
    try{

      const result = repo.findById( data )
      if(result){
        return result
      }
      return null
  
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
        console.log(erro)
        return response.status( 400 ).json({"erro" : "Not Exits Or Data Invalid"});
    }
  
  }

  async deleteTeacherId(request, response) {

    const { id } = request.query;

    try{        
        const result = await repo.delete(id);
        if( result ){
          return response.status(201).json({ "result" : "Removed" })
        }else{
          return response.status(400).json({ "result" : "Not Exits" })
        }
  
    }catch(erro){
        console.log(erro)
        return response.status(500).json({"erro" : erro})
    }
  
  }

  async getAllTeacher( request, response ) {
  
    try{

      const result = await repo.findAll()
      return response.status(201).json( { result } )
  
    }catch(erro){

      return response.status(500).json( { "erro" : erro } )

    }

  }

}
