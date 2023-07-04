import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1626163918297 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        schema: 'public',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'birthday',
            type: 'date',
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'tex_phone',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'gender',
            type: 'smallint',
          },
          {
            name: 'account',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'address',
            type: 'varchar',
            length: '200',
          },
          {
            name: 'exmergency_name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'exmergency_phone',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'created_at',
            type: 'time without time zone',
            default: 'now()',
          },
          {
            name: 'identity',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'updated_at',
            type: 'time without time zone',
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
