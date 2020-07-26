import { CommonModule } from './../common/common.module';
import { Module } from '@nestjs/common';
// import { AppService } from 'src/app.service';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { LocationMappingService } from './location-mapping.service';

@Module({
    imports: [TypeOrmModule.forFeature([Location]), CommonModule],
    providers: [LocationService, LocationMappingService],
    controllers: [LocationController]
    // providers: [AppService]
})
export class LocationModule {}
