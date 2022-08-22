import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import loansRoute from "./src/routes/loans"
import personalLoansRoute from "./src/routes/personalLoans"
import badCreditLoansRoute from "./src/routes/badCreditLoans"

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use("/api", loansRoute);
app.use("/api", personalLoansRoute);
app.use("/api", badCreditLoansRoute);

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`port is running at ${PORT}`));
