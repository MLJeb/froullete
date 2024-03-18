import { Test, TestingModule } from '@nestjs/testing';
import { RoulletesController } from './roulletes.controller';
import { RoulletesService } from './roulletes.service';

describe('RoulletesController', () => {
  let controller: RoulletesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoulletesController],
      providers: [RoulletesService],
    }).compile();

    controller = module.get<RoulletesController>(RoulletesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
