import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './features/todo/todo.module';
import { CopyTodoModule } from './features/copy-todo/copy-todo.module';
import { DatabaseModule } from './database/database.neon';

@Module({
  imports: [TodoModule, CopyTodoModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
