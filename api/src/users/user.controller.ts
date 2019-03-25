import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

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

