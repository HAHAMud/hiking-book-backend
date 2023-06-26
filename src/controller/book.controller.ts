import { Controller, Get } from '@nestjs/common';
import { BookStoreService } from '../service';
import { BookStoreDto } from '../dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookStoreService: BookStoreService) {}

  @Get()
  async get(): Promise<BookStoreDto[]> {
    return await this.bookStoreService.getBookList();
  }
}
