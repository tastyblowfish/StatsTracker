import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/Users';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly UserRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.UserRepository.find();
  }

  async find(payload): Promise<Users> {
    let user = (await this.UserRepository.find({email: payload.email}))[0];
    if (user.password != payload.password) {
      user = null;
    }
    return user;
  }

  async findById(id): Promise<Users> {
    return (await this.UserRepository.find({id: id}))[0];
  }

  async findOneByEmail(email): Promise<Users> {
    return (await this.UserRepository.find({email: email}))[0];
  }
}
