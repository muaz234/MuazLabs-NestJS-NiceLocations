import { Location } from './location.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from './location.service';
import { Repository } from 'typeorm';
import * as sinon from 'sinon';
describe('LocationService', () => {
  let service: LocationService;
  let mockRepository: Repository<Location>;
  let mock : sinon.SinonMock;
  beforeEach(async () => {
   mockRepository = { } as Repository<Location>;
   mockRepository = Object.assign(mockRepository, {
      find: new Function(),
   });
   mock = sinon.mock(mockRepository);
   mock.expects('find').resolves([
     GenericFactory.create<Location>(Location, 
      {
       id: '',
       name: 'Location 1'
     }),
     GenericFactory.create<Location>(Location, 
      {
       id: '',
       name: 'Location 1'
     })
   ]);
  service = new LocationService(mockRepository);
  });
  it('should return locations', () => {
    expect(service.list()).resolves.toMatchObject([]);
  });
});
