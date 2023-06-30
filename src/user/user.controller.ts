import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import UserEntity from './user.entity';
import UserService from './user.service';
import { UserDto } from './user.dto';

@Controller('users')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * @description 獲取所有的 user 資料
   * @returns
   */
  @Get()
  async findAll(): Promise<UserDto[]> {
    return await this.userService.getUserList();
  }

  /**
   * @param id
   * @description 透過 id 獲取 user 資料
   * @returns
   */
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserDto> {
    return await this.userService.getUserById(id);
  }

  /**
   * @param user
   * @description 新增 user 資料
   * @returns
   */
  @Post()
  async create(@Body() user: UserEntity): Promise<UserDto> {
    return await this.userService.createUser(user);
  }

  /**
   *
   * @param id
   * @param user
   * @description 透過 id 更新 user 資料
   * @returns
   */
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() user: UserEntity,
  ): Promise<void> {
    return await this.userService.updateUser(id, user);
  }

  /**
   * @param id
   * @description 透過 id 刪除 user 資料
   * @returns
   */
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
