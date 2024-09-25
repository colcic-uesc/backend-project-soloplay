


module.exports = class teacherRepo {
  teacher = [];

  create(params) {
    params["id"] = this.teacher.length;
    this.teacher.push(params);
    return this.params;
  }

  findAll(params) {
    return this.teacher;
  }

  update(params) {
    let array = this.teacher.find((elemente) => elemente.id == params.id);
    this.teacher[array.id].name = params.name;
    this.teacher[array.id].email = params.email;
    return array;
  }

  delete(params) {

    let array = this.teacher.filter((elemente) => elemente.id != params);
    return this.teacher = array;

  }
};