const studentController = require("../Controller/student.controller");
const teacherController = require("../Controller/teacher.controller");
const relationshipRepository = require("../Repository/relationship.repo");
const contStudent = new studentController();
const contTeacher = new teacherController();
const repoRelationship = new relationshipRepository();

module.exports = class studentController {

  async createRelationShip(request, response) {

    const { studentId, teacherId } = request.body;
  
    try{        

        if( studentId != null && teacherId != null ){

            const student = contStudent.findById(studentId)
            const teacher = contTeacher.findById(teacherId)
            if( student && teacher ){

                repoRelationship.createRelationShip( teacherId, studentId)
                return response.status(201).json({ "result": "Criado" });

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

      const result = await repoRelationship.findAllRelationShip();
      if(result){
        return response.status( 201 ).json( {"result": result} );
      }
      return response.status(400).json({ "result" : "something is wrong" })

    }catch( erro ){

      return response.status(500).json({ "erro": erro });

    }

  }

  async deleteRelationShipId(request, response) {

    const { id } = request.query;

    try{        
        const result = await repoRelationship.findRelationShipById(id);
        if( result ){
          return response.status(201).json({ "result" : "Removed" })
        }else{
          return response.status(400).json({ "result" : "Not Exits" })
        }
  
    }catch(erro){
        return response.status(500).json({"erro" : erro})
    }
  
  }

}