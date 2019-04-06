import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  username: string;

  @Column('text')
  password: string;

  @Column('text')
  email: string;

  @Column('int')
  type: number;

  @Column()
  active: boolean;
}
