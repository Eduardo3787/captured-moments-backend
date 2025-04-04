import fastify from "fastify";
import { routes } from "./routes";
import fastifyMultipart from "@fastify/multipart";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import path from "path";

const app = fastify({ logger: true });

// Registra o CORS com as opções necessárias
app.register(cors, {
  origin: "http://localhost:5173", // permite seu frontend
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

// Registra outros plugins
app.register(fastifyMultipart);
app.register(fastifyStatic, {
  root: path.join(__dirname, "..", "uploads"),
  prefix: "/uploads",
});

// Por fim, registra as rotas
app.register(routes);

export default app;







































//import fastify from "fastify";
//import { routes } from "./routes";
//import fastifyMultipart from "@fastify/multipart";
//import cors from '@fastify/cors'
//import fastifyStatic from "@fastify/static";
//import path from "path"


//const app = fastify({ logger: true });

//app.register(fastifyMultipart);
//app.register(routes);
//app.register(cors);

//app.register(fastifyStatic, {
    //root: path.join(__dirname, '..', 'uploads'),
    //prefix: '/uploads'
//})

//export default app;
