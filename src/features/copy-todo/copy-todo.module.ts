import { Module } from '@nestjs/common';
import { CopyTodoController } from './copy-todo.controller';
import { TodoModule } from '../todo/todo.module';

@Module({
  controllers: [CopyTodoController],
  imports: [TodoModule],
})
export class CopyTodoModule {}
