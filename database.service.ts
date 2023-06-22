import { Injectable } from '@nestjs/common';
import { createConnection, Connection } from 'typeorm';

@Injectable()
export class DatabaseService {
  private connection: Connection;

  async connect(): Promise<void> {
    this.connection = await createConnection();
  }

  getConnection(): Connection {
    return this.connection;
  }
}
