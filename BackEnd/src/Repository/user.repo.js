const { User } = require("../DataBase/models");


module.exports = class userRepo {

  async createUser(username, password) {  

    console.log(username, password)

    return await User.create({ username, password });

  }

  async findAllUser(){

    return await User.findAll();

  };

  async findUserById(id) {
    
    await User.findById(
      {
        where: {
            id,
        },
    });
  }

  async updateUser(id, username, password) {

    return await User.update(
    
      {
        username: username ? username : User.username,
        password: password ? password : User.password
      },
      {
        where: {
            id,
        },
    });
    
  }

  async deleteUserById(id) {
    
    await User.destroy(
      {
        where: {
            id,
        },
    });
  }
};
