import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller()
export class UsersController {
  constructor(
    private readonly userService: UsersService
  ) {}

  @Get('/users')
  @UseGuards(AuthGuard())
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('user/:id')
  @UseGuards(AuthGuard())
  findById(@Param('id') id): Promise<User> {
    return this.userService.findById(id);
  }

  @Get('user/email/:email')
  @UseGuards(AuthGuard())
  findOneByEmail(@Param('email') email): Promise<User> {
    return this.userService.findOneByEmail(email);
  }
}

