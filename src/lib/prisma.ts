import { Prisma, PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
declare global {
  // eslint-disable-next-line no-unused-vars
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;

  // Cleanup on server shutdown
  process.on("exit", () => {
    prisma.$disconnect();
  });
}

export default prisma;
