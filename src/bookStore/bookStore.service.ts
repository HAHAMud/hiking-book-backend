import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BookStoreDto, BookStoreEntity } from './index';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookStoreService {
  private logger = new Logger(BookStoreService.name);
  private readonly tableName: string = 'book_store';
  private readonly tableSchema: Array<string> = [
    'id',
    'author',
    'name',
    'publication',
    'createdAt',
    'updatedAt',
  ];
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(BookStoreEntity)
    private readonly bookStoreRepo: Repository<BookStoreEntity>,
  ) { }
  async getBookList(): Promise<BookStoreDto[]> {
    try {
      const result = await this.bookStoreRepo.find();
      return result.map((book) => ({
        id: book.id,
        name: book.name,
        author: book.author,
        publication: book.publication,
        createdAt: book.createdAt.getTime(),
        updatedAt: book.updatedAt.getTime(),
      }));
    } catch (error) {
      this.logger.error({ message: 'getBookList error' }, error);
      throw error;
    }
  }
  async getBookById(id: string): Promise<BookStoreDto> {
    try {
      const book = await this.bookStoreRepo.findOne({
        where: {
          id: id,
        },
      });
      if (!book) {
        this.logger.error({ message: `book with id ${id} not found` });
        throw new NotFoundException(`book with id ${id} not found`);
      }
      return {
        id: book.id,
        author: book.author,
        name: book.name,
        publication: book.publication,
        createdAt: book.createdAt.getTime(),
        updatedAt: book.updatedAt.getTime(),
      };
    } catch (error) {
      this.logger.error({ message: 'getBookById error' }, error);
      throw error;
    }
  }
  async updateById(
    id: string,
    updateDto: Partial<BookStoreDto>,
  ): Promise<BookStoreDto> {
    try {
      const queryBuilder = this.dataSource
        .getRepository(BookStoreEntity)
        .createQueryBuilder(this.tableName);
      const result = await queryBuilder
        .update<BookStoreEntity>(BookStoreEntity, updateDto)
        .where(`${this.tableName}.id = :id`, { id })
        .returning(this.tableSchema)
        .updateEntity(true)
        .execute();
      const model = result.raw[0] as BookStoreEntity;
      return {
        id: model.id,
        name: model.name,
        author: model.author,
        publication: model.publication,
        createdAt: model.createdAt.getTime(),
        updatedAt: model.updatedAt.getTime(),
      };
    } catch (error) {
      this.logger.error({ message: 'updateById error' }, error);
      throw error;
    }
  }
  async insertBook(dto: BookStoreDto): Promise<BookStoreDto> {
    try {
      this.logger.log({ dto });
      const data = new BookStoreEntity();
      data.author = dto.author;
      data.name = dto.name;
      data.publication = dto.publication;
      const queryBuilder = this.dataSource
        .getRepository(BookStoreEntity)
        .createQueryBuilder(this.tableName);
      const result = await queryBuilder
        .insert()
        .into(BookStoreEntity)
        .values([data])
        .returning(this.tableSchema)
        .updateEntity(true)
        .execute();
      const model = result.raw[0] as BookStoreDto;
      model.createdAt = new Date(result.raw[0]['created_at']).getTime();
      model.updatedAt = new Date(result.raw[0]['updated_at']).getTime();
      return {
        id: model.id,
        name: model.name,
        author: model.author,
        publication: model.publication,
        createdAt: model.createdAt,
        updatedAt: model.updatedAt,
      };
    } catch (error) {
      this.logger.error({ message: 'insertBook error' }, error);
      throw error;
    }
  }

  async deleteById(id: string): Promise<BookStoreDto> {
    try {
      this.logger.log({ id });
      const queryBuilder = this.dataSource
        .getRepository(BookStoreEntity)
        .createQueryBuilder(this.tableName);
      const result = await queryBuilder
        .delete()
        .where(`${this.tableName}.id = :id`, { id })
        .returning(this.tableSchema)
        .execute();
      const model = result.raw[0] as BookStoreDto;
      model.createdAt = new Date(result.raw[0]['created_at']).getTime();
      model.updatedAt = new Date(result.raw[0]['updated_at']).getTime();
      return {
        id: model.id,
        name: model.name,
        author: model.author,
        publication: model.publication,
        createdAt: model.createdAt,
        updatedAt: model.updatedAt,
      };
    } catch (error) {
      this.logger.error({ message: 'deleteById error' }, error);
      throw error;
    }
  }
}
