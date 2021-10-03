import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @Column()
    dateOfBirth: Date;
    
    @Column()
    courseName: string;
    
    @Column()
    hours: string;
    
    @Column("double")
    price: number;
} export default Student;