import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from './location.service';
import { Repository } from 'typeorm';

describe('LocationService', () => {
  let service: LocationService;
  let mockRepository: Repository<Lo
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
