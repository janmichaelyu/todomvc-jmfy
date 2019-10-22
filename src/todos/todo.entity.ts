
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 , default: 'No Title'})
    title: string;

    @Column({default: false})
    completed: boolean;

    @Column({default: 1, type: 'int'})
    order: number;

    @Column({default: ''})
    url: string;
}
