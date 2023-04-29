import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createUSer(user: CreateUserDto) {
    const users = this.userRepository.create(user);
    return this.userRepository.save(users);
  }

  getUsers() {
    return this.userRepository.find();
  }

  getUser(id: number) {
    return this.userRepository.findOne({
      where: { id: id },
    });
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id: id });
  }

  updateUser(id: number, user: UpdateUserDto) {
    return this.userRepository.update({ id }, user);
  }
}
