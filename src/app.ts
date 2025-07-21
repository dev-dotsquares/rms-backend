import express from "express";
import allRoutes from "./routes/";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Restaurant Management System API",
      version: "1.0.0",
      description: "API documentation for the Restaurant Management System backend."
    },
    servers: [
      { url: "/api" }
    ]
  },
  apis: [
    "./src/**/*.ts"
  ]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", allRoutes);

// TODO: Add routes here

export default app;
