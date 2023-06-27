import { Controller, Get } from '@nestjs/common';
import { BookStoreService } from './bookStore.service';
import { BookStoreDto } from './book-store.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookStoreService: BookStoreService) { }

  @Get()
  async get(): Promise<BookStoreDto[]> {
    return await this.bookStoreService.getBookList();
  }
}
