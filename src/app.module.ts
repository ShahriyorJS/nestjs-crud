import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"postgres",
      host:"localhost",
      port: 5432,
      username: "postgres",
      password: "1235",
      database: "nestjs_crud",
      autoLoadEntities: true,
      synchronize: true
    }),UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
