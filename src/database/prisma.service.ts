import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit { //quando fizer a instancia do prisma, faz da bd
  async onModuleInit() { //força conexão com bd
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) { //quando perde conexão com bd, para app
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}