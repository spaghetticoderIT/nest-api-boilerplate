import { Controller } from '@nestjs/common';
import { UsersDaoService } from './users.dao.service';
import { JwtService } from 'src/services/jwt.service';
import { RedisService } from 'src/services/redis.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly redisService: RedisService,
    private readonly jwtService: JwtService,
    private readonly usersDaoService: UsersDaoService,
  ) {}
}
