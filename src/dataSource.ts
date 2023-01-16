import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const nodeEnv = String(process.env.NODE_ENV);

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**/*.{js,ts}");
  const migrationsPath: string = path.join(__dirname, "./migrations/*.{js,ts}");

  return {
    type: "postgres",
    host: process.env.HOST,
    port: parseInt(process.env.PGPORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    logging: false,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
