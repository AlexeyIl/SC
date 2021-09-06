import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ISignAuthPayload,
  ISignAuthResponse,
} from '@sc/shared/utils/interfaces';
import { UserEntity } from '../../user/entities/user.entity';
import { UserService } from '../../user/services/user.service';
import { PasswordService } from './password.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly passwordService: PasswordService
  ) {}

  public async validateUser(
    username: string,
    pass: string
  ): Promise<Omit<UserEntity, 'password'>> {
    const user = await this.userService.findOneByUserName(username);
    const isValid = user
      ? await this.passwordService.compareHash(pass, user.password)
      : false;
    if (isValid) {
      delete user.password;
      return user;
    }
    return null;
  }

  public async login(
    signInPayload: ISignAuthPayload
  ): Promise<ISignAuthResponse> {
    const user = await this.validateUser(
      signInPayload.username,
      signInPayload.password
    );

    const payload = { username: user.username, userId: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
      expiresIn: new Date(environment.jwt.expiresIn).getDate(),
      id: user.id,
    };
  }
}
