import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { TodosController } from './todos.controller';
import { Todo } from './todo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    providers: [TodoService],
    controllers: [TodosController],
})
export class TodoModule {}
