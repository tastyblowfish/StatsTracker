import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly PlayerRepository: Repository<Player>,
  ) {}

  async findAll(): Promise<Player[]> {
    return await this.PlayerRepository.find();
  }

  async findById(id): Promise<Player[]> {
    return await this.PlayerRepository.find({id: id});
  }
}
