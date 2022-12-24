import { Router } from "../deps.ts";
import { 
    postProd, 
    findProd, 
    putProd,
    deleteProd
} from "../handlers/producto.ts";
export const router = new Router()
    .get("/api/productos/:uuid", findProd)
    .post("/api/productos/", postProd)
    .put("/api/productos/:uuid", putProd)
    .delete("/api/productos/:uuid", deleteProd)