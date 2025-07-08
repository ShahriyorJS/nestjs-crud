import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class user{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    last_name: string
}