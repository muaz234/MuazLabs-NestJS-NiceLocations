import { MappingRegistryService } from 'src/common/mapping-registry.service';
import { LocationService } from './location.service';
import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
// import { AppService } from './app.service';

describe('LocationController', () => {
  let locationController: LocationController;
  let mockLocationService: LocationService;
  let mappingRegistryService: MappingRegistryService;
  beforeEach(async () => {
   
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
