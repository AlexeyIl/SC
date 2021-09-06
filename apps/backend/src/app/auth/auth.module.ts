import { Module } from '@nestjs/common';
import { UsersModule } from '../user/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { environment } from '../../environments/environment';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      privateKey: environment.jwt.secret,
      signOptions: {
        expiresIn: environment.jwt.expiresIn,
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class AuthModule {}
