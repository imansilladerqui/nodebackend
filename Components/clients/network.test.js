const request = require("supertest");
const express = require("express");
const app = express();

describe('Client Controller', () => {
  test('should call controller.getClient', () => {
    request(app)
    .get("/api/clients/")
    .expect(200);
  });
});