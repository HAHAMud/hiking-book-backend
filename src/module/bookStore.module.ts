import { Module } from '@nestjs/common';
import { BookController } from '../controller';
import { BookStoreService } from '../service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookStoreEntity } from '../entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookStoreEntity])],
  controllers: [BookController],
  providers: [BookStoreService],
})
export class BookStoreModule {}
