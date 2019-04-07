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
        if (res.length > 0) {
          const user: JwtPayload = { email: res[0].email };
          token = this.jwtService.sign(user);
        }
      });
    return token;
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findOneByEmail(payload.email);
  }
}
