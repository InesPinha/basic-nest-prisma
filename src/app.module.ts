import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; 
import { PrismaService } from './database/prisma.service';
import { TeamMembersRepository } from './repositories/members-repository';
import { PrismaTeamMembersRepository } from './repositories/prisma/prisma-team-members-repository';

@Module({
  imports: [],
  controllers: [AppController], //nest consegue detetar a dependencia do appservice que esta no provider, mas para isso precisa do @injectable
  providers: [
    PrismaService,
    {
      provide:TeamMembersRepository, 
      useClass:PrismaTeamMembersRepository
    }
],//qualquer coisa que n seja um controler
})
export class AppModule {}
