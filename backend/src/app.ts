import "express-async-errors";
import express from "express";
import albumRouter from "./routes/album.route.js";
import songRouter from "./routes/song.route.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { checkDbConnection } from "./database/client.js";
import cors from "cors";

const port = process.env.API_PORT || 3001;

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/album", albumRouter);
app.use("/song", songRouter);

app.use(errorMiddleware);

app.listen(port, async () => {
  await checkDbConnection();
  console.log(`Server is running on port ${port}`);
});
