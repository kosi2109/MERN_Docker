import express, { Response, Request } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send(`Express + TypeScript Server ${process.env.Name || "Default"}`);
});

app.get("/user", (req: Request, res: Response) => {
  return res.json({
    name : "Si Thu Htet",
    age: 24
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
