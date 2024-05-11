import { Task } from 'src/tasks/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()

export class TasksStatus {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    description: string;

    @OneToMany(() => Task, task => task.taskCategory)
    tasks: Task[];
}
