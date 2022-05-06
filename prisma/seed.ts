import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const name = "Button";

  // cleanup the existing database
  await prisma.component.delete({ where: { name } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const component = await prisma.component.create({
    data: {
      name,
    },
  });

  await prisma.componentVersion.create({
    data: {
      version: "0.0.0",
      definition: `
export const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => (
  <button {...props}>{children}</button>
)`,
      componentId: component.id,
    },
  });

  await prisma.componentVersion.create({
    data: {
      version: "1.0.0",
      definition: `
export const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({children, className, type = "button", ...props}) => (
  <button className={\`class another-class \${className}\`} {...props} type={type}>{children}</button>
)`,
      componentId: component.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
