import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { AppController, AppService } from './index';
import { BookStoreModule } from '../bookStore/index';

@Module({
  imports: [
    BookStoreModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      useFactory(configService: ConfigService) {
        const IS_DB_SSL_MODE = configService.getOrThrow<boolean>(
          'IS_DB_SSL_MODE',
          true,
        );
        return {
          ssl: IS_DB_SSL_MODE,
          extra: {
            ssl: IS_DB_SSL_MODE ? { rejectUnauthorized: false } : null,
            poolSize: 5,
            idleTimeoutMillis: 3600000,
          },
          type: 'postgres',
          url: configService.getOrThrow('DATABASE_URL', ''),
          synchronize: false,
          autoLoadEntities: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
  //imports: [,BookStoreModule, TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
