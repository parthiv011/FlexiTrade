import { PrismaClient } from "@flexitrade/db/client";
const prisma = new PrismaClient();

export default function Home() {
  return <div>Hello from user app</div>;
}
