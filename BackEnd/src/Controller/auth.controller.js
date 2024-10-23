const userRepository = require("../Repository/user.repo");
const userRepo = new userRepository();


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

}