import { app } from "./app";
import { AppDataSource } from "./dataSource";
import "dotenv/config";

const PORT = process.env.PORT || 3333;

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(PORT, () => {
    console.log(`Connected to database on PORT ${PORT}`);
  });
})();
