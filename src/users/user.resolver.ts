import { Inject } from '@nestjs/common';
import { Args, Field, InputType, Mutation, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { User } from 'src/users/models/user.model';

@InputType()
export class UserCreateInput {
  @Field({ nullable: true })
  name: string | null;

  @Field()
  email: string;
}

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Mutation((returns) => User)
  signupUser(@Args('data') data: UserCreateInput) {
    return this.prismaService.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
  }
}
