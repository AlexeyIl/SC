import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { IUser } from '@sc/shared/utils/interfaces';

@Entity({
    name: 'users'
})
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    created: string;

    @UpdateDateColumn()
    updated: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;
}