import { Body, Controller, Get, Post } from '@nestjs/common';
/*import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';*/
import {CreateTeamMemberBody} from "./dtos/create-team-member-body"
import {TeamMembersRepository} from "./repositories/members-repository"

@Controller()
export class AppController {
  /*constructor(private readonly prisma: PrismaService) {}
 
  
  @Get("hello")
  async getHello() {
    const member= await this.prisma.teamMember.create({
      data:{
        id: "capita",
        name: "ines piedade",
        function: "dev"
      }
    }); 
    return  {
      member
    }
  }

  @Get("recivingParameters")
  async getRecivingParameters(@Body() body:CreateTeamMemberBody) {
   const {name, function:memberFunction} = body
    const member= await this.prisma.teamMember.create({
      data:{
        id: randomUUID(),
        name,
        function:memberFunction
      }
    }); 
    return  {
      member
    }
  }*/

  constructor(private teamMembersRepository:TeamMembersRepository) {}
  
  @Post("recivingParameters")
  async getRecivingParameters(@Body() body:CreateTeamMemberBody) {
   const {name, function:memberFunction} = body
   await this.teamMembersRepository.create(name, memberFunction); 
  }

}
