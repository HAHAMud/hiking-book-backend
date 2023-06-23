import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class AppService {
  constructor(@Inject('DATABASE_POOL') private readonly pool: Pool) { }

  getHello(): string {
    return 'Hello World!';
  }
  async getPostgresVersion(): Promise<void> {
    let client;
    try {
      client = await this.pool.connect();
      const res = await client.query('SELECT version()');
      console.log(res.rows[0]);
    } catch (error) {
      console.error('Error connecting to PostgreSQL:', error);
    } finally {
      client.release();
    }
  }
}
