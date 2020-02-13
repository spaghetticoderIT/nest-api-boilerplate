import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { WorkersModule } from './workers/workers.module';

@Module({
  imports: [WorkersModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
