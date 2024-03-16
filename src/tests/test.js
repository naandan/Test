import request from "supertest";
import { expect } from "chai"; // Tambahkan pengimporan ini
import app from "../app.js";

describe("Server", () => {
  it('should return status 200 and display "Hello, World!"', async () => {
    try {
      const res = await request(app).get("/");
      console.log(res.status);
      console.log(res.headers["content-type"]);
      console.log(res.text);
      expect(res.status).to.equal(200);
      expect(res.headers["content-type"]).to.contain("text/html");
      expect(res.text).to.contain("Hello World!");
    } catch (err) {
      throw err;
    }
  });
});
