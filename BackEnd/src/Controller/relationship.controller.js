const studentController = require("../Controller/student.controller");
const teacherController = require("../Controller/teacher.controller");
const relationshipRepository = require("../Repository/relationship.repo");
const contStudent = new studentController();
const contTeacher = new teacherController();
const repoRelationship = new relationshipRepository();

module.exports = class studentController {

  async createRelationShip(request, response) {

    const data = request.body;
  
    try{        

        if( data != null ){

            const student = contStudent.findById(data)
            const teacher = contTeacher.findById(data)
            console.log(student, teacher)
            if( student && teacher ){

                repoRelationship.create( data )
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