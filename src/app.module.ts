import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostResolver } from './posts/post.resolver';
import { PrismaService } from './prisma.service';
import { UserResolver } from './users/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), '/src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PostResolver, UserResolver, PrismaService],
})
export class AppModule {}
