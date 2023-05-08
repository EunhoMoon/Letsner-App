import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CreateUserDto } from "./dto/create-user.dto";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

const mockRepository = () => ({
  create: jest.fn(),
  save: jest.fn()
});
type MockRepository<T =any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const createUser = new CreateUserDto("test@co.kr", "1234");

describe('UserService', () => {
  let service: UserService;
  let userRepository: MockRepository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, { provide: getRepositoryToken(User), useValue: mockRepository() }],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<MockRepository<User>>(getRepositoryToken(User));
  });

  it("createUser 힘수의 타입은 function", () => {
    expect(typeof service.createUser).toBe("function");
  });

  it("createUser 호출시 ", async () => {
    await service.createUser(createUser);
    expect(userRepository.create).toHaveBeenCalledWith(createUser);
  });
});
