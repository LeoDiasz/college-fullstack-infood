

interface CreateUserDatas {
  name: string;
  cpf: string;
  email: string;
  password: string;
}


export class CreateUserServices {
  async services({name, cpf, email, password}: CreateUserDatas) {
    
    if(!email && !password) {
      throw new Error("Email and password invalid.")
    }

    if (cpf.length != 11) throw new Error("Cpf invalid")

   
  }
}