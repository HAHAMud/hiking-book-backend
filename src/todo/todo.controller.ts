import {
  Controller,
  Get,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Body,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  @Get('/example')
  getAllTodos() {
    return [
      {
        id: 1,
        title: 'Example 1',
        description: 'Example 1 description',
      },
    ];
  }

  @Get(':id')
  getTodoById(@Param('id') id: string) {
    return {
      id,
      title: `Example ${id}`,
      description: `Example ${id} description`,
    };
  }

  @Get()
  getTodoByQuery(
    @Query('limit') limit: number = 30,
    @Query('offset') offset: number = 0,
  ) {
    const list = [
      {
        id: 1,
        title: 'Title 1',
        description: '',
      },
      {
        id: 2,
        title: 'Title 2',
        description: '',
      },
    ];
    return list.slice(offset, limit);
  }

  @Patch()
  @HttpCode(HttpStatus.NO_CONTENT)
  get() {
    return;
  }

  @Post()
  add(@Body() dto: CreateTodoDto) {
    return { ...dto };
  }
}
