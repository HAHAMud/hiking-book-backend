import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getPostgresVersion } from "./database/database.neon"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  const v = await getPostgresVersion();
}
bootstrap();
