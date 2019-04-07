import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UserTypes {
  @PrimaryColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
}
