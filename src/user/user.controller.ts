import { Body, Controller, Get, Post } from '@nestjs/common';
import { json } from 'stream/consumers';
import {CreateUserDTO } from './DTO/CreateUserDTO';
import { UserService } from './Services/user.service';
import { User } from './interfaces/user.interface';


@Controller('user')
export class UserController {

    // pegando da interfaces e dto
    // entidades de models como em C#
    constructor(private readonly usersevice: UserService) {}


   @Get()
    async getAllUser() : Promise<User[]>{
     return this.usersevice.getAllUsers();
    }

    @Post()
    async CreateUser(@Body() createuser: CreateUserDTO) : Promise<User>{ // this referenciando a UserService
        return this.usersevice.CreateUser(createuser);

    }

    
  
}
