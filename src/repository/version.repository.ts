
import { Injectable, Inject } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';


@Injectable()
export class VersionRepository {
    private client: PoolClient;

    constructor(@Inject('DATABASE_POOL') private readonly pool: Pool) { }

    async connect(): Promise<void> {
        this.client = await this.pool.connect();
    }

    async disconnect(): Promise<void> {
        if (this.client) {
            this.client.release();
        }
    }

    async getVersion(): Promise<string> {
        await this.connect();
        try {
            const res = await this.client.query('SELECT version()');
            return res.rows[0];
        } finally {
            await this.disconnect();
        }
    }
}