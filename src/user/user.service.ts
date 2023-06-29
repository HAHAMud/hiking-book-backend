import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UserDto, UserEntity } from '.';

@Injectable()
export class UserService {
  private logger = new Logger(UserService.name);
  private readonly tableName: string = 'user';
  private readonly tableSchema: Array<string> = [
    'id',
    'name',
    'identity',
    'birthday',
    'phone',
    'texPhone',
    'email',
    'gender',
    'account',
    'password',
    'address',
    'exmergencyName',
    'exmergencyPhone',
    'createdAt',
    'updatedAt',
  ];

  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async getUserList(): Promise<UserDto[]> {
    // 獲取所有的 user 資料
    try {
      const result = await this.userRepo.find();

      return result;
    } catch (error) {
      this.logger.error({ message: 'getUserList error' }, error);
      throw error;
    }
  }

  async getUserById(id: number): Promise<UserDto> {
    // 透過 id 獲取 user 資料
    try {
      const user = await this.userRepo.findOne({
        where: {
          id,
        },
      });

      if (!user) {
        this.logger.error({ message: `user with id ${id} not found` });
        throw new NotFoundException(`user with id ${id} not found`);
      }

      return user;
    } catch (error) {
      this.logger.error({ message: 'getUserById error' }, error);
      throw error;
    }
  }

  async createUser(user: UserDto): Promise<UserDto> {
    // 新增 user 資料
    try {
      const result = await this.userRepo.save(user);
      return result;
    } catch (error) {
      this.logger.error({ message: 'createUser error' }, error);
      throw error;
    }
  }

  async updateUser(id: number, user: UserDto): Promise<void> {
    // 透過 id 更新 user 資料
    try {
      await this.userRepo.update(id, user);
      return;
    } catch (error) {
      this.logger.error({ message: 'updateUser error' }, error);
      throw error;
    }
  }

  async deleteUser(id: number): Promise<void> {
    // 透過 id 刪除 user 資料
    try {
      await this.userRepo.delete(id);
      return;
    } catch (error) {
      this.logger.error({ message: 'deleteUser error' }, error);
      throw error;
    }
  }
}
