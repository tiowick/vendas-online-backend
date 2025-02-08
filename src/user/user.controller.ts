import { Controller, Get } from '@nestjs/common';
import { json } from 'stream/consumers';

@Controller('user')
export class UserController {

   @Get()
    async getAllUser(){
     return JSON.stringify({ test: '123456' });
    }
}
