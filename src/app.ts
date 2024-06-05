import express, { type Request, type Response } from "express";
import cors from "cors";

import { PORT } from "./config";
import { authenticate } from "./middlewares/auth";
import { rateLimit } from "./middlewares/rate-limit";
import { simpleHasher } from "./utils/hash";
import { type ResponsePayload } from "./types";

const app = express();
app.use(cors());
app.use(express.json());

const userVisits = new Map<string, number>();

app.get("/", authenticate, rateLimit, async (req: Request, res: Response) => {
  const stream = req.query.stream;
  const userId = res.locals.userId as string;

  const visitCount = (userVisits.get(userId) || 0) + 1;
  userVisits.set(userId, visitCount);

  let group: number;

  try {
    group = simpleHasher(+userId);
  } catch (error) {
    return res.status(400).json({ status: 400, body: "Invalid user ID" });
  }

  if (stream === "true") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });

    for (let i = 0; i < 5; i++) {
      const payload: ResponsePayload = {
        message: `Welcome USER_${userId}, this is your visit #${visitCount}`,
        group,
        rate_limit_left: res.locals.rate_limit_left,
        stream_seq: i + 1,
      };

      res.write(JSON.stringify(payload) + "\n\n");

      if (i === 4) break;

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return res.end();
  }

  const payload: ResponsePayload = {
    message: `Welcome USER_${userId}, this is your visit #${visitCount}`,
    group,
    rate_limit_left: res.locals.rate_limit_left,
    stream_seq: 0,
  };

  return res.status(200).json(payload);
});

export const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
