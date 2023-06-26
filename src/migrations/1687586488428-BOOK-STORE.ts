import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class BOOKSTORE1687586488428 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'book_store',
        schema: 'public',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            generatedIdentity: 'ALWAYS',
            generationStrategy: 'increment',
            isGenerated: true,
            isPrimary: true,
          },
          {
            name: 'created_at',
            type: 'time without time zone',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'time without time zone',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'author',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'publication',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('public.book_store', true, true, true);
  }
}
