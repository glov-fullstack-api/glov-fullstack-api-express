import request from "supertest";
import { server } from "../app";

describe("Authorization Tests", () => {
  afterAll(() => {
    server.close();
  });

  it("should respond with 401 if no authorization token is provided", async () => {
    const response = await request(server).get("/").query({ stream: "true" });
    console.log(response.statusCode);

    expect(response.status).toBe(401);
  });

  it("should respond with 401 if the authorization token is incorrect", async () => {
    const response = await request(server)
      .get("/")
      .query({ stream: "false" })
      .set("Authorization", "Bearer WRONG_TOKEN");

    expect(response.status).toBe(401);
  });

  it("should respond with 400 if the stream parameter is not provided", async () => {
    const response = await request(server)
      .get("/")
      .set("Authorization", "Bearer USER123");

    expect(response.status).toBe(400);
  });

  it("should respond with example data if the authorization token is correct", async () => {
    const response = await request(server)
      .get("/")
      .query({ stream: "false" })
      .set("Authorization", "Bearer USER123");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      message: "Welcome USER_123, this is your visit #1",
      group: 4,
      rate_limit_left: 3,
      stream_seq: 0,
    });
  });

  it("should respond with 429 if the rate limit is exceeded", async () => {
    await request(server)
      .get("/")
      .query({ stream: "false" })
      .set("Authorization", "Bearer USER123");
    await request(server)
      .get("/")
      .query({ stream: "false" })
      .set("Authorization", "Bearer USER123");
    await request(server)
      .get("/")
      .query({ stream: "false" })
      .set("Authorization", "Bearer USER123");
    await request(server)
      .get("/")
      .query({ stream: "false" })
      .set("Authorization", "Bearer USER123");

    const response = await request(server)
      .get("/")
      .query({ stream: "false" })
      .set("Authorization", "Bearer USER123");

    expect(response.status).toBe(429);
  });
});
