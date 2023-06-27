import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('book_store', { schema: 'public' })
export class BookStoreEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'bigint',
  })
  id: string;
  @CreateDateColumn({
    name: 'created_at',
    type: 'time without time zone',
  })
  createdAt: Date;
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'time without time zone',
  })
  updatedAt: Date;
  @Column({
    name: 'author',
    type: 'varchar',
    length: '100',
  })
  author: string;
  @Column({
    name: 'name',
    type: 'varchar',
    length: '100',
  })
  name: string;
  @Column({
    name: 'publication',
    type: 'varchar',
    length: '100',
  })
  publication: string;
}
