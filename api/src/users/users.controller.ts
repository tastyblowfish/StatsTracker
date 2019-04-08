import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { Users } from '../entities/Users';

@Controller()
export class UsersController {
  constructor(
    private readonly userService: UsersService
  ) {}

  @Get('/users')
  @UseGuards(AuthGuard())
  findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }

  @Get('user/:id')
  @UseGuards(AuthGuard())
  findById(@Param('id') id): Promise<Users> {
    return this.userService.findById(id);
  }

  @Get('user/email/:email')
  @UseGuards(AuthGuard())
  findOneByEmail(@Param('email') email): Promise<Users> {
    return this.userService.findOneByEmail(email);
  }
}

