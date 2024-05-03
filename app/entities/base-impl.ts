import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";


@Entity()
export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({name: "create_time"})
    createdDate: Date

    @UpdateDateColumn({name: "update_time"})
    updatedDate: Date

    @Column({nullable: false})
    note: string
}