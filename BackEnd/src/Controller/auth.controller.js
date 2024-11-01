const userRepository = require("../Repository/user.repo");
const userRepo = new userRepository();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../DataBase/models');
const { secret } = require('../Middlewares/auth');


module.exports = class userController {

    async createUser (request, response) {

        const { username, password } = request.body;
        
        try {

            const responseult = await userRepo.createUser(username, password)
            if( responseult ){
                return response.status(201).json({ message: 'Usuário registrado com sucesso!' });
            }
            return response.status(500).json({ error: 'Erro ao registrar usuário.' });

        } catch (error) {
          console.log(error)
            return response.status(500).json({ error: 'Erro ao registrar usuário.' });
        }
    };

    async findAllUser( request, response ) {
  
        try{
    
          const result = await userRepo.findAllUser()
          return response.status(201).json( { result } )
      
        }catch(erro){
    
          return response.status(500).json( { "erro" : erro } )
    
        }
    
    }

    async login(request, response) {

        const { username, password } = request.body;
      
        try {
          const user = await User.findOne({ where: { username } });
          if (!user || !(await bcrypt.compare(password, user.password))) {
            return response.status(401).json({ message: 'Credenciais inválidas' });
          }
      
          const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: '1h' });
          response.json({ token });
        } catch (error) {
          console.error(error);
          response.status(500).json({ message: 'Erro no servidor' });
        }
    };

    async deleteUserId( request, response){

        const { id } = request.query;

        try{        
            const result = await userRepo.deleteUserById(id);
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