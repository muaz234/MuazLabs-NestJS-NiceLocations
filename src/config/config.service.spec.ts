import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';
import { resolve } from 'path';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   providers: [ConfigService],
    // }).compile();

    service = new ConfigService();
  });

  it('should indicate view locations', () => {
    const templatePath = resolve(__dirname, '../..', 'views');
    expect(service.get<string>('templates.path')).toEqual(templatePath);
  });
});
