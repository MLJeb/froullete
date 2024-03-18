import { Test, TestingModule } from '@nestjs/testing';
import { RoulletesService } from './roulletes.service';

describe('RoulletesService', () => {
  let service: RoulletesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoulletesService],
    }).compile();

    service = module.get<RoulletesService>(RoulletesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
