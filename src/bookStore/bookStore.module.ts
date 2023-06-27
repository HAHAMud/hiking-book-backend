import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController, BookStoreService, BookStoreEntity } from './index';

@Module({
  imports: [TypeOrmModule.forFeature([BookStoreEntity])],
  controllers: [BookController],
  providers: [BookStoreService],
})
export class BookStoreModule { }
