import { Injectable, Inject } from '@nestjs/common';
import { USER_SCHEMA_SCHEMA_TOKEN } from 'src/utils/constants';
import { Model } from 'mongoose';
import { UserDatabaseDocument, User } from './user.interface';

@Injectable()
export class UsersDaoService {
  constructor(
    @Inject(USER_SCHEMA_SCHEMA_TOKEN)
    private readonly userModel: Model<UserDatabaseDocument>,
  ) {}

  async create(user: User): Promise<UserDatabaseDocument> {
    try {
      return await new this.userModel(user).save();
    } catch (err) {
      throw err;
    }
  }
}
