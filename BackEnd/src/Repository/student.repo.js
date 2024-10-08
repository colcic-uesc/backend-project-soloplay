const { Student } = require("../DataBase/models");


module.exports = class studentRepo {
  alunos = [];

  create(params) {
    params["id"] = this.alunos.length;
    this.alunos.push(params);
    return this.params;
  }

  findAll() {
    return this.alunos;
  }

  findById(params) {

    const id = params.studentId;
    let array = this.alunos.find((element) => element.id == id);
    if( array ){ return true; }
    return null;

  }

  update(params) {

    const id = params.id;
    let array = this.alunos.find((elemente) => elemente.id == id);
    if( array ) {
      this.alunos[id].name = params.name;
      this.alunos[id].email = params.email;
      return array;
    }
    return null;
    
  }

  delete(params) {

    let array = this.alunos.filter((elemente) => elemente.id != params);
    return this.alunos = array;

  }
};