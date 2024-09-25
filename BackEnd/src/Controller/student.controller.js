const studentRepository = require("../Repository/student.repo");
const repo = new studentRepository()

module.exports = class studentController {

  async createStudent(request, response) {

    const student = request.body;
  
    try{        

        if( student != null ){

          repo.create(student);
          return response.status(201).json({ "result": student });

        }else{
          return response.status(400).json({ "result" : "something is wrong" })
        }
  
    }catch(erro){

        return response.status(500).json({"erro" : erro})
    }
  
  }

  async findAll( request, response ) {

    try{

      const result = await emailRepo.findAll();
      return response.status( 201 ).json( result );

    }catch( e ){

      return response.status(500).json({ "erro": erro });

    }

  }

  async updateStudent( request, response ) {

    const student = request.body;
  
    try{        
        const result = await repo.update( student );
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

  async deleteStudentId(request, response) {

    const { id } = request.query;

    try{        
        const result = await repo.delete(id);
        if( result ){
          return response.status(201).json({ "result" : "Removed" })
        }else{
          return response.status(400).json({ "result" : "Not Exits" })
        }
  
    }catch(erro){
        return response.status(500).json({"erro" : erro})
    }
  
  }

  async getAllStudent( request, response ) {
  
    try{

      const result = await repo.findAll()
      return response.status(201).json( { result } )
  
    }catch(erro){

      return response.status(500).json( { "erro" : erro } )

    }

  }

}
