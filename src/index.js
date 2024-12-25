import express from "express";
import bodyParser from "body-parser";
import v1Router from './v1/routes/workoutRoutes.js'
import { swaggerDocs as V1SwaggerDocs } from './v1/swagger.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("index");
})

app.use('/api/v1/workouts', v1Router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    V1SwaggerDocs(app, port);
})