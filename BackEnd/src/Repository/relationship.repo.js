const { StudentTeacher } = require("../DataBase/models");


module.exports = class relationshipRepo {
    teacher_student = [];
  
    async create(params) {

      params["id"] = this.teacher_student.length;
      this.teacher_student.push(params);
      return this.params;

    }

    delete(params) {

        let array = this.teacher_student.filter((elemente) => elemente.id != params);
        return this.teacher_student = array;
    
    }

    findAll(params) {
        return this.teacher_student;
    }

    delete(params) {
        let array = this.teacher_student.filter((elemente) => elemente.id != params);
        return (this.teacher_student = array);
      }

  };