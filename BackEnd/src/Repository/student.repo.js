


module.exports = class studentRepo {
  alunos = [];

  create(params) {
    params["id"] = this.alunos.length;
    this.alunos.push(params);
    return this.params;
  }

  findAll(params) {
    return this.alunos;
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