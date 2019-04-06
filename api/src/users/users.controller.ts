import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/users')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('user/:id')
  findById(@Param('id') id): Promise<User[]> {
    return this.userService.findById(id);
  }

  @Get('user/email/:email')
  findOneByEmail(@Param('email') email): Promise<User[]> {
    return this.userService.findOneByEmail(email);
  }
}

