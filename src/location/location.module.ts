import { Module } from '@nestjs/common';
// import { AppService } from 'src/app.service';
import { LocationService } from './location.service';

@Module({
    imports: [LocationModule],
    providers: [LocationService]
    // providers: [AppService]
})
export class LocationModule {

}
