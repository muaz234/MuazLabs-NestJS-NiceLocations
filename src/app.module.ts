import { Module } from '@nestjs/common';
import { LocationController } from './location/location.controller';
// import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { LocationService } from './location/location.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [LocationModule, ConfigModule, DatabaseModule, CommonModule]
  // controllers: [LocationController],
  // providers: [LocationService],
})
export class AppModule {}
