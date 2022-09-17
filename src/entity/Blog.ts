import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class blog {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Name: string

    @Column()
    description: string 

    @Column()
    createdat: string

    @Column()
    updatedat: string

}