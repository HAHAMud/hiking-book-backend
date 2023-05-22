import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';

@Controller('copy-todos')
export class CopyTodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() body: { id: number; title: string; description: string }) {
    this.todoService.createTodo(body);

    return body;
  }
}
