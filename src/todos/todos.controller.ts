import {Controller, Get, Post, Param, Put, Delete, Body, Patch} from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    findAll(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Get(':id')
    get(@Param() params) {
        return this.todoService.get(params.id);
    }

    @Post()
    create(@Body() todo: Todo) {
        todo.url = '/todos/';
        return this.todoService.update(todo);
    }

    @Put()
    update(@Body() todo: Todo) {
        return this.todoService.update(todo);
    }

    @Delete(':id')
    deleteTodo(@Param() params) {
        return this.todoService.delete(params.id);
    }

    @Delete()
    deleteTodos() {
        return this.todoService.deleteAll();
    }

    // @Patch()
}
