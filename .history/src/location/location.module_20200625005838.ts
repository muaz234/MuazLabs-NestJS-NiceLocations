import { Module } from '@nestjs/common';
// import { AppService } from 'src/app.service';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { CommonModule } from 'src/common/common.module';
import { LocationMappingService } from './location-mapping.service';

@Module({
    imports: [TypeOrmModule.forFeature([Location]), CommonModule],
    providers: [LocationService, LocationMappingService],
    controllers: [LocationController]
    // providers: [AppService]
})
export class LocationModule {

}
