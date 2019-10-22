import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ) {}

    async findAll(): Promise<Todo[]> {
        return await this.todoRepository.find();
    }

    async get(id: number): Promise<Todo[]> {
        const todos = await this.todoRepository.find({
            where: [{ id }],
        });
        for (const todo of todos) {
            todo.url = '/todos/' + todo.id;
        }
        return todos;
    }

    async update(todo: Todo) {
        const newTodo = await this.todoRepository.save(todo);
        newTodo.url = '/todos/' + newTodo.id;
        return newTodo;
    }

    async delete(todo: Todo) {
        return await this.todoRepository.delete(todo);
    }

    async deleteAll() {
        return await this.todoRepository.clear();
    }
}
