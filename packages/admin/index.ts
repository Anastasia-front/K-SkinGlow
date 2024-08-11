import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const allProducts = await prisma.product.create({
    data: {
      title: "product 1",
      description: "some description",
      images: "some images",
      price: 10.01,
      volume: 100,
      reviewsCount: 3,
      averageRating: 5.0,
      // categoryId: 1,
      category: {
        create: { title: "cream" },
      },
      // brandId: 1,
      brand: {
        create: { title: "dior" },
      },
      // cart:"",
      // favorites:"",
      // reviews:"",
    },
  });

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     favorites: true,
  //     reviews: true,
  //   },
  // });
  // console.dir(allUsers, { depth: null });
  console.info(allProducts);

  const product = await prisma.category.update({
    where: { id: 1 },
    data: { title: "cream" },
  });
  console.log(product);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
