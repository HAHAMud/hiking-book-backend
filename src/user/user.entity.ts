import {
  Column,
  Generated,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user', { schema: 'public' })
export class UserEntity {
  // 自動生成 id
  @PrimaryGeneratedColumn('increment')
  id: number;

  // @Column()
  // @Generated('uuid')
  // uuid: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: '100',
  })
  name: string;

  @Column({
    name: 'birthday',
    type: 'date',
  })
  birthday: Date;

  @Column({
    name: 'phone',
    type: 'varchar',
    length: '20',
  })
  phone: string;

  @Column({
    name: 'tex_phone',
    type: 'varchar',
    length: '20',
  })
  texPhone: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: '100',
  })
  email: string;

  @Column({
    name: 'gender',
    type: 'smallint',
  })
  gender: number;

  @Column({
    name: 'account',
    type: 'varchar',
    length: '100',
  })
  account: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: '100',
  })
  password: string;

  @Column({
    name: 'address',
    type: 'varchar',
    length: '200',
  })
  address: string;

  @Column({
    name: 'exmergency_name',
    type: 'varchar',
    length: '100',
  })
  exmergencyName: string;

  @Column({
    name: 'exmergency_phone',
    type: 'varchar',
    length: '20',
  })
  exmergencyPhone: string;

  // 自動生成建立時間
  @CreateDateColumn({
    name: 'created_at',
    type: 'time without time zone',
  })
  createdAt: Date;

  @Column({
    name: 'identity',
    type: 'varchar',
    length: '100',
  })
  identity: string;

  // 自動生成更新時間
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'time without time zone',
  })
  updatedAt: Date;
}
