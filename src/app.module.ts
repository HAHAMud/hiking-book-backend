import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './features/todo/todo.module';
import { CopyTodoModule } from './features/copy-todo/copy-todo.module';
import { DatabaseModule } from './database/database.neon';
import { VersionRepository } from "./repository/version.repository"

@Module({
  imports: [TodoModule, CopyTodoModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, VersionRepository],
})
export class AppModule { }
