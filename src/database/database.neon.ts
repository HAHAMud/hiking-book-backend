import { Module } from '@nestjs/common';
import { Pool } from 'pg';
require('dotenv').config();

@Module({
    providers: [
        {
            provide: 'DATABASE_POOL',
            useValue: new Pool({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false,
                },
            }),
        },
    ],
    exports: ['DATABASE_POOL'],
})
export class DatabaseModule { }