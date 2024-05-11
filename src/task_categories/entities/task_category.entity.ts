import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
    
    @Column()
    color: string;

}
