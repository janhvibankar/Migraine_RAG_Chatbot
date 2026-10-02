import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import express from "express";
import cors from "cors";
import helmet from "helmet";

describe("Health Endpoint & CORS Middleware Integration", () => {
  let app;
  let server;
  let port;

  before(async () => {
    app = express();
    app.use(helmet());

    const rawOrigins = process.env.RAG_ALLOWED_ORIGINS || process.env.CORS_ORIGIN;
    const allowedOrigins = rawOrigins
      ? rawOrigins.split(",").map(origin => origin.trim()).filter(Boolean)
      : ["http://localhost:5173"];

    app.use(
      cors({
        origin: allowedOrigins,
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        optionsSuccessStatus: 204
      })
    );
    app.use(express.json());

    app.get("/health", (req, res) => {
      res.status(200).json({ status: "ok" });
    });

    await new Promise((resolve) => {
      server = app.listen(0, () => {
        port = server.address().port;
        resolve();
      });
    });
  });

  after(async () => {
    if (server) {
      await new Promise((resolve) => server.close(resolve));
    }
  });

  it("GET /health returns HTTP 200 with { status: 'ok' }", async () => {
    const res = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${port}/health`, (response) => {
        let data = "";
        response.on("data", (chunk) => (data += chunk));
        response.on("end", () => {
          resolve({ status: response.statusCode, body: JSON.parse(data) });
        });
      }).on("error", reject);
    });

    assert.equal(res.status, 200);
    assert.equal(res.body.status, "ok");
  });

  it("CORS allows configured origin http://localhost:5173", async () => {
    const res = await new Promise((resolve, reject) => {
      const req = http.request(
        {
          hostname: "127.0.0.1",
          port,
          path: "/health",
          method: "GET",
          headers: {
            Origin: "http://localhost:5173"
          }
        },
        (response) => {
          resolve({
            status: response.statusCode,
            allowOriginHeader: response.headers["access-control-allow-origin"]
          });
        }
      );
      req.on("error", reject);
      req.end();
    });

    assert.equal(res.status, 200);
    assert.equal(res.allowOriginHeader, "http://localhost:5173");
  });

  it("CORS handles OPTIONS preflight request", async () => {
    const res = await new Promise((resolve, reject) => {
      const req = http.request(
        {
          hostname: "127.0.0.1",
          port,
          path: "/health",
          method: "OPTIONS",
          headers: {
            Origin: "http://localhost:5173",
            "Access-Control-Request-Method": "POST"
          }
        },
        (response) => {
          resolve({
            status: response.statusCode,
            allowOriginHeader: response.headers["access-control-allow-origin"],
            allowMethodsHeader: response.headers["access-control-allow-methods"]
          });
        }
      );
      req.on("error", reject);
      req.end();
    });

    assert.equal(res.status, 204);
    assert.equal(res.allowOriginHeader, "http://localhost:5173");
  });
});
