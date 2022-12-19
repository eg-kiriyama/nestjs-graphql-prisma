import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../../posts/models/post.model';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  email: string;

  @Field((type) => String, { nullable: true })
  name?: string | null;

  @Field((type) => [Post], { nullable: true })
  posts?: [Post] | null;
}
