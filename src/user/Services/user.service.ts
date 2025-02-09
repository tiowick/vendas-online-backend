import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../DTO/CreateUserDTO';
import { User} from '../interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
   
    private users: User[] = []
    async CreateUser(createuserdto: CreateUserDTO):Promise<User>{ //por ser async usa promise<entidade - interface>


        const saltOrRounds = 10;
        // criptografando a senha
        const senhaHash = await hash(createuserdto.senha, saltOrRounds)

        const user: User = {
            ...createuserdto,
            id:this.users.length + 1,
            senha: senhaHash,
        }

        this.users.push(user);

        return user;

    }

    async getAllUsers(): Promise<User[]>{
        return this.users;
    }

}
