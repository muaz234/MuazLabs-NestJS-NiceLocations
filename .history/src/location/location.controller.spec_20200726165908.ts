import { LocationMappingService } from './location-mapping.service';
import { GenericFactory } from './../common/generic.factory';
import { MappingRegistryService } from '../common/mapping-registry.service';
import { LocationService } from './location.service';
import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { MockHelper } from 'src/common/mock.helper';
// import { AppService } from './app.service';

describe('LocationController', () => {
  let locationController: LocationController;
  let mockLocationService: LocationService;
  let mappingRegistryService: MappingRegistryService;
  beforeEach(async () => {
   mockLocationService = MockHelper.mock<LocationService>({
     list: {
       resolves: [
        GenericFactory.create<Location>(Location, 
          {
           id: '7aec6a62-2036-4926-8ca9-fa31a74816dc',
           name: 'Location 1'
         }),
         GenericFactory.create<Location>(Location, 
          {
           id: '0497551b-9cd6-4a49-b609-aa31e11e19bc',
           name: 'Location 2'
         })
        ]
     }
   })
   mappingRegistryService = new MappingRegistryService();
   const locationMappingService = new LocationMappingService(mappingRegistryService);
   locationController = new LocationController(mockLocationService)
  });
  // locationController = new LocationController();
  describe('root', () => {
    it('should return locations', () => {
      expect(locationController.listLocations()).toMatchObject({
        locations: 
        [
          
        ]},
      );
    });
  });
});
