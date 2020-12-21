//This file organizes and structures the controllers and services, here we will add controllers and services coming from other files
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosController } from './libros/libros.controller';

@Module({
  imports: [],
  controllers: [AppController, LibrosController],
  providers: [AppService],
})
export class AppModule {}
