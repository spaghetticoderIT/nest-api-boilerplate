import { Module } from '@nestjs/common';
import { WorkersController } from './workers.controller';
import { DatabaseModule } from 'src/singletons/database/database.module';

@Module({
  controllers: [WorkersController],
  imports: [DatabaseModule],
  providers: [],
})
export class WorkersModule {}
