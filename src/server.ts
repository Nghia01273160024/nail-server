import express, { Request, Response } from "express";
import cors from "cors";
import userRouter from "./routes/user.router";
import moment from 'moment';
const app = express();
const port = 5000;

// Middleware
app.use(cors());

// Routes
app.use("/api", userRouter);

app.get("/", (_: Request, res: Response) => {
  return res.send(`
    <div>
      <h2>Hello World!</h2>
      <h4>Version: ${moment(1718617399 * 1000)
          .utcOffset(0)  // Corrected to UTC offset 0
          .format("DD/MM/YYYY - (HH:mm)")}</h4>
    </div>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`Express server started on port: ${port}`);
});

export default app;