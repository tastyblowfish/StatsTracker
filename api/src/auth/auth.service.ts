import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(payload): Promise<string> {
    let token = null;
    await this.validateUser(payload)
      .then(res => { 
        if (res) {
          token = this.jwtService.sign(payload);
        }
      });
    return token;
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.find(payload);
  }
}
