import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos: { id: number; title: string; description: string }[] = [
    { id: 1, title: 'Todo 1', description: 'Description 1' },
  ];

  getTodos(): { id: number; title: string; description: string }[] {
    return this.todos;
  }

  createTodo(item: { id: number; title: string; description: string }) {
    this.todos = [...this.todos, item];
  }
}
