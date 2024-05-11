import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
    
    @Column()
    color: string;

    
    @OneToMany(() => Task, task => task.tasksStatus)
    tasks: Task[];

}
