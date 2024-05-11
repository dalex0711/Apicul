import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()

export class TasksStatus {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    description: string;
}
