import { Module } from '@nestjs/common';
// import { AppService } from 'src/app.service';

@Module({
    imports: [LocationModule]
    // providers: [AppService]
})
export class LocationModule {

}
