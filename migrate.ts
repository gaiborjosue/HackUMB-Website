import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

// for migrations
const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });
await migrate(drizzle(migrationClient), {migrationsFolder: "./drizzleTest"})

console.log("Migrations complete")

