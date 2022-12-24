import { Application } from "./deps.ts";
import { router } from "./routes/productos.ts";
const app = new Application();
app.use(router.routes());
await app.listen({ port: 8080 });
console.log(`Servidor Oak escuchando en el puerto 8080`);