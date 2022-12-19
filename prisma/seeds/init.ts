import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Dustin Boswell',
    email: 'd-boswell@user.com',
    posts: {
      create: [
        {
          title: 'readable code',
          content: 'coding design',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Scott Meyers',
    email: 's-meyers@user.com',
    posts: {
      create: [
        {
          title: 'Effective C++',
          content: 'C++ coding',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Joe Celco',
    email: 'j-celco@user.com',
    posts: {
      create: [
        {
          title: 'SQL Puzzle',
          content: 'Questions',
          published: true,
        },
        {
          title: 'Instant SQL Programming',
          content: 'SQL program',
        },
      ],
    },
  },
  {
    name: 'Takaaki Mizuno',
    email: 't-mizuno@user.com',
    posts: {
      create: [
        {
          title: 'WebAPI The Good Parts',
          content: 'API Design',
          published: true,
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding initial data.`);

  for (const u of userData) {
    const user = await prisma.user.create({ data: u });
    console.log(`created user with id: ${user.id}`);
  }

  console.log(`seeding is finished!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
