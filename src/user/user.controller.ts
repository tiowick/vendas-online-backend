import { Body, Controller, Get, Post } from '@nestjs/common';
import { json } from 'stream/consumers';
import {CreateUserDTO } from './DTO/CreateUserDTO';

@Controller('user')
export class UserController {

   @Get()
    async getAllUser(){
     return JSON.stringify({ test: '123456' });
    }

    // pegando da interfaces e dto
    // entidades de models como em C#
    @Post()
    async CreateUser(@Body() createuser: CreateUserDTO){
        return createuser;
    }

    
  
}
