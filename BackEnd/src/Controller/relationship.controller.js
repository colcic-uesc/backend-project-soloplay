const studentRepository = require("../Repository/student.repo");
const teacherRepository = require("../Repository/teacher.repo");
const relationshipRepository = require("../Repository/relationship.repo");
const repoStudent = new studentRepository();
const repoTeacher = new teacherRepository();
const repoRelationship = new relationshipRepository();

module.exports = class studentController {

  async createRelationShip(request, response) {

    const data = request.body;
  
    try{        

        if( data != null ){

            const student = repoStudent.findById(data)
            const teacher = repoTeacher.findById(data)
            console.log(student, teacher)
            if( student && teacher ){

                await repoRelationship.create( data )
                return response.status(201).json({ "result": data });

            }
            return response.status(400).json({ "result" : "something is wrong" })
        }else{
            return response.status(400).json({ "result" : "something is wrong" })
        }
  
    }catch(erro){
        console.log(erro)
        return response.status(500).json({"erro" : erro})
    }
  
  }

  async findAllRelationShip( request, response ) {

    try{

      const result = await repoRelationship.findAll();
      return response.status( 201 ).json( {"result": result} );

    }catch( e ){

      return response.status(500).json({ "erro": erro });

    }

  }

}