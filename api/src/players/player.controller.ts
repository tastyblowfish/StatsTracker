import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PlayerService } from './player.service';
import { Player } from './player.entity';

@Controller()
export class PlayerController {
  constructor(
    private readonly playerService: PlayerService
  ) {}

  @Get('/players')
  @UseGuards(AuthGuard())
  findAll(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Get('player/:id')
  @UseGuards(AuthGuard())
  findById(@Param('id') id): Promise<Player[]> {
    return this.playerService.findById(id);
  }
}

