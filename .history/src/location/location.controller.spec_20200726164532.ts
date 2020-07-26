import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
// import { AppService } from './app.service';

describe('LocationController', () => {
  let locationController: LocationController;

  beforeEach(async () => {
   
  });
  // locationController = new LocationController();
  describe('root', () => {
    it('should return locations', () => {
      expect(locationController.listLocations()).toMatchObject({
        locations: 
        [
          'Location 1', 
          'Location 2', 
          'Location 3'
        ]},
      );
    });
  });
});
