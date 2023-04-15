import { CreateUserDTO, UserDTO } from 'src/common/types/user/user.types';

export interface UserRepository {
  getAll(): Promise<UserDTO[]>;
  getById(id: number): Promise<UserDTO | null>;
  createUser(payload: CreateUserDTO): Promise<void>;
}
