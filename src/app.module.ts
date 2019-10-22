import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todos/todo.module';
import {TodoService} from './todos/todo.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
      TodoModule,
  ],
})
export class AppModule {}
