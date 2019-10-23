import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    private base = 'http://localhost:3000/todos/';

    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ) {}

    async findAll(): Promise<Todo[]> {
        const todos = await this.todoRepository.find();
        for (const todo of todos) {
            todo.url = this.base + todo.id;
        }
        return todos;
    }

    async get(id: number): Promise<Todo> {
        const todo = await this.todoRepository.findOne({
            where: [{ id }],
        });
        todo.url = this.base + todo.id;
        return todo;
    }

    async update(todo: Todo) {
        const newTodo = await this.todoRepository.save(todo);
        newTodo.url = this.base + newTodo.id;
        return newTodo;
    }

    async delete(todo: Todo) {
        return await this.todoRepository.delete(todo);
    }

    async deleteAll() {
        return await this.todoRepository.clear();
    }
}
