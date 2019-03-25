import { Controller, Get, Param } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from './player.entity';

@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('/players')
  findAll(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Get('player/:id')
  findById(@Param('id') id): Promise<Player[]> {
    return this.playerService.findById(id);
  }
}

