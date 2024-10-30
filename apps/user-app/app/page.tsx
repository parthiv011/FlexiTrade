import prisma from "@flexitrade/db/client";

export const GET = async () => {
  const response = await prisma.user.findMany({
    select: {
      id: true,
    },
  });
};

export default function Home() {
  return <div>Hello from user app</div>;
}
