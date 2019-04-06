import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.UserRepository.find();
  }

  async findById(id): Promise<User[]> {
    return await this.UserRepository.find({id: id});
  }

  async findOneByEmail(email): Promise<User[]> {
    return await this.UserRepository.find({email: email});
  }
}
