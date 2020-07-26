import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;
  let mockRepository: Repo
  beforeEach(async () => {

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
