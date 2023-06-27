import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookStoreService } from './bookStore.service';
import { BookStoreEntity } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookStoreEntity])],
  controllers: [BookController],
  providers: [BookStoreService],
  exports: [BookStoreModule]
})
export class BookStoreModule { }
