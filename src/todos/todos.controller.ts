import {Controller, Get, Post, Param, Put, Delete, Body, Patch, Inject} from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { PATH_METADATA } from '@nestjs/common/constants';
import {AppController} from '../app.controller';
import {RouterExplorer} from '@nestjs/core/router/router-explorer';

@Controller('todos')
export class TodosController {
    private base = 'http://localhost:3000/todos/';

    constructor(
        private readonly todoService: TodoService,
    ) {}

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


    @Patch(':id')
    async patch(@Param() params, @Body() patch: Todo) {

        let todo = await this.todoService.get(params.id);
        todo.url = this.base + params.id;
        todo = Object.assign(todo, patch);

        return this.todoService.update(todo);
    }
}
