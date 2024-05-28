import { Request, Response, NextFunction } from "express";
import { RATE_LIMIT, REQUEST_LIMIT } from "../config";

const requestCounts = new Map<string, { timestamps: number[], lastReset: number }>();

export function rateLimit(_: Request, res: Response, next: NextFunction) {
  const userId = res.locals.userId as string;

  const currentTime = Date.now();
  const timeWindow = +RATE_LIMIT;
  const requestLimit = +REQUEST_LIMIT;

  if (!requestCounts.has(userId)) {
    requestCounts.set(userId, { timestamps: [], lastReset: currentTime });
  }

  const { timestamps, lastReset } = requestCounts.get(userId)!;

  if (currentTime - lastReset > timeWindow) {
    requestCounts.set(userId, { timestamps: [], lastReset: currentTime });
  }

  if (timestamps.length >= requestLimit) {
    return res.status(429).json({ status: 429, body: "Rate Limit Exceeded" });
  }

  timestamps.push(currentTime);
  requestCounts.set(userId, { timestamps, lastReset });

  return next();
}
