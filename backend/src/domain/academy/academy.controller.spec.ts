import { Test, TestingModule } from '@nestjs/testing';
import { AcademyController } from './academy.controller';
import { AcademyService } from './academy.service';

describe('AcademyController', () => {
  let controller: AcademyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademyController],
      providers: [AcademyService],
    }).compile();

    controller = module.get<AcademyController>(AcademyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
