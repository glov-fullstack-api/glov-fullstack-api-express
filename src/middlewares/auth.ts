import { Request, Response, NextFunction } from "express";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const stream = req.query.stream;
  if (!stream) {
    return res
      .status(400)
      .json({ status: 400, body: "stream parameter is required" });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ status: 401, body: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const validator = /^USER(\d{3})$/;

  const isValidToken = validator.test(token);
  if (!isValidToken) {
    return res.status(401).json({ status: 401, body: "Unauthorized" });
  }

  const userId = token.match(validator)![1];
  res.locals.userId = userId;

  return next();
}
