import { TaskCategory } from 'src/task_categories/entities/task_category.entity';
import { TasksStatus } from 'src/tasks_status/entities/tasks_status.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    color: string;

    @Column ({nullable:false})
    userId : number;
    @ManyToOne(() => User, user => user.tasks)
    user:User;

    @Column ({nullable:false})
    taskCategoryId : number;
    @ManyToOne(() => TaskCategory, taskCategory => taskCategory.tasks)
    taskCategory:TaskCategory;

    @Column ({nullable:false})
    tasksStatusId : number;
    @ManyToOne(() => TasksStatus,tasksStatus => tasksStatus.tasks)
    tasksStatus:TasksStatus;


}
