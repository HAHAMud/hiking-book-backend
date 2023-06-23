// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TodoModule } from './features/todo/todo.module';
// import { CopyTodoModule } from './features/copy-todo/copy-todo.module';
// import { DatabaseService } from 'database.service';

// @Module({
//   imports: [TodoModule, CopyTodoModule],
//   controllers: [AppController],
//   providers: [AppService, DatabaseService],
// })
export class AppModule {
  // constructor(private readonly databaseService: DatabaseService) {}

  async onModuleInit(): Promise<void> {
    // await this.databaseService.connect();
  }
}
