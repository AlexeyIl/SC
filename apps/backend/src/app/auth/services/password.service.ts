import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

@Injectable()
export class PasswordService {
  private saltRounds = 10;

  public getHash(password: string): Promise<string> {
    return hash(password, this.saltRounds);
  }

  public compareHash(password: string, passwordHash: string): Promise<boolean> {
    return compare(password, passwordHash);
  }
}
