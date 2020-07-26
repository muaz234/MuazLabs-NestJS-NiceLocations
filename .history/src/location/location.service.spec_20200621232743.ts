import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   providers: [LocationService],
    // }).compile();

    // service = module.get<LocationService>(LocationService);
  });
  service = new LocationService();

  it('should return locations', () => {
    expect(service.list()).toMatchObject([
      'Location 1',
      'Location 2',
      'Location 3'
    ]);
  });
});
