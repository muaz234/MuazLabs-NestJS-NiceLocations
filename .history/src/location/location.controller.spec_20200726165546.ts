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
   mockLocationService = MockHelper.mock<LocationService>Z/LocationService>
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
