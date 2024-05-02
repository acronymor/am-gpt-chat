import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

interface ISetting {
    id: number
    userId: string
    content: string
    createdDate: Date
    updatedDate: Date
}

@Entity()
export class Setting implements ISetting {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: string

    @Column({type: 'text'})
    content: string

    @Column({type: 'timestamp'})
    @CreateDateColumn()
    createdDate: Date

    @Column({type: 'timestamp'})
    @UpdateDateColumn()
    updatedDate: Date
}
