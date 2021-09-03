import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { environment } from '../environments/environment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
      entities: [],
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
