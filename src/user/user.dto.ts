/**
 * User Data Transfer Object
 * @export
 * @class UserDto
 * @implements {User}
 * @param {string} id - User uuid
 * @param {string} name - User 名字
 * @param {string} identity - User 身份證
 * @param {Date} birthday - User 生日
 * @param {string} phone - User 電話
 * @param {string} tex_phone - User 家裡電話
 * @param {string} email - User email
 * @param {number} gender - User 性別, 0: 男, 1: 女
 * @param {string} account - User 帳號
 * @param {string} password - User 密碼
 * @param {string} address - User 地址
 * @param {string} exmergency_name - User 緊急聯絡人
 * @param {string} exmergency_phone - User 緊急聯絡人電話
 * @param {Date} createdAt - User 建立時間
 * @param {Date} updatedAt - User 更新時間
 * @returns {UserDto}
 */
export class User {
  id: string;
  name: string;
  identity: string;
  birthday: Date;
  phone: string;
  tex_phone: string;
  email: string;
  gender: number;
  account: string;
  password: string;
  address: string;
  exmergency_name: string;
  exmergency_phone: string;
  createdAt: Date;
  updatedAt: Date;
}
