import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { PayloadDto } from './dto/PayloadDto.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post()
  async create(@Body() payloadDto: PayloadDto)  {
    return await this.authService.signIn(payloadDto);
  }

  @Get('data')
  @UseGuards(AuthGuard())
  findAll() {
    // this route is restricted by AuthGuard
    // JWT strategy
  }

  @Get('authorize')
  @UseGuards(AuthGuard())
  authorize() {
    return 'Success';
  } 
}
