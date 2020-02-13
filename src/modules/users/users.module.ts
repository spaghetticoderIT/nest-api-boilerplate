import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/singletons/database/database.module';
import { UsersDaoService } from './users.dao.service';
import { usersDatabaseProviders } from './users.database.providers';
import { UsersController } from './users.controller';
import { JwtModule } from 'src/singletons/jsonwebtoken/jwt.module';
import { RedisModule } from 'src/singletons/redis/redis.module';
import { RedisService } from 'src/services/redis.service';
import { JwtService } from 'src/services/jwt.service';

@Module({
  imports: [RedisModule, JwtModule, DatabaseModule],
  controllers: [UsersController],
  providers: [
    RedisService,
    JwtService,
    UsersDaoService,
    ...usersDatabaseProviders,
  ],
})
export class UsersModule {}
