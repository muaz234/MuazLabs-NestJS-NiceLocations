import { GenericFactory } from './../common/generic.factory';
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
       id: '7aec6a62-2036-4926-8ca9-fa31a74816dc',
       name: 'Location 1'
     }),
     GenericFactory.create<Location>(Location,
      {
       id: '0497551b-9cd6-4a49-b609-aa31e11e19bc',
       name: 'Location 2'
     })
   ]);
  service = new LocationService(mockRepository);
  });
  it('should return locations', () => {
    expect(service.list()).resolves.toMatchObject([
      {
        id: '7aec6a62-2036-4926-8ca9-fa31a74816dc',
        name: 'Location 1'
      },
      {
        id: '0497551b-9cd6-4a49-b609-aa31e11e19bc',
        name: 'Location 2'
      }
    ]);
  });
});
