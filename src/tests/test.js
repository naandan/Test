import request from "supertest";
import app from "../app.js";

describe("Server", () => {
  it('should return status 200 and display "Hello, World!"', async () => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", /text\/html/)
      .expect("Hello World!");
  });
});
