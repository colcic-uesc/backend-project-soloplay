module.exports = class studentRepo {
  teacher = [{
    "id":0,
    "name": "admin",
    "email": "admin@gmail.com",
    "projects": [
      {
        "id":1,
        "name": "java"
      },
      {
        "id":2,
        "name":"python"
      }
    ]
  }];

  create(params) {
    params["id"] = this.teacher.length;
    this.teacher.push(params);
    return this.params;
  }

  findAll(params) {
    return this.teacher;
  }

  update(params) {

    const id = params.id;
    let array = this.teacher.find((elemente) => elemente.id == id);
    if (array) {
      this.teacher[id].name = params.name;
      this.teacher[id].email = params.email;
      return array;
    }
    return null;
  }

  delete(params) {
    let array = this.teacher.filter((elemente) => elemente.id != params);
    return (this.teacher = array);
  }
};
