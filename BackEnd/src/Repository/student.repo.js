


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
    let array = this.alunos.find((elemente) => elemente.id == params.id);
    this.alunos[array.id].name = params.name;
    this.alunos[array.id].email = params.email;
    return array;
  }

  delete(params) {

    let array = this.alunos.filter((elemente) => elemente.id != params);
    return this.alunos = array;

  }
};