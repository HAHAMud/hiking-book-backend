import { Injectable, Inject } from '@nestjs/common';
import { VersionRepository } from './repository/version.repository';

@Injectable()
export class AppService {
  constructor(private readonly versionRepo: VersionRepository) { }

  getHello(): string {
    return 'Hello World!';
  }
  async getPostgresVersion(): Promise<void> {
    try {
      const version = await this.versionRepo.getVersion();
      console.log(version);
    } catch (error) {
      console.error('Error connecting to PostgreSQL:', error);
    }
  }
}
