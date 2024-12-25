import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: "Crossfit WOD API", version: "1.0.0" },
    },
    apis: ["./src/v1/routes/workoutRoutes.js", "./src/database/Workout.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    // 处理文档路由
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // 使得允许使用 JSON 格式文档
    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(
        `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
    );
};

export {
    swaggerDocs,
}