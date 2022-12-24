import type { Producto, ProductoCreate, ProductoUpdate } from "../types/producto.ts";
import { v1 } from "../deps.ts";

let productos: Producto[] = [];

export const postProd = (producto: ProductoCreate): Producto=>{
    const uuid = v1.generate().toString();
    const productoPush = {
        uuid:uuid, 
        name:producto.name, 
        price:producto.price, 
        desc:producto.desc };
    productos.push(productoPush)
    return{
        uuid:productoPush.uuid, 
        name:productoPush.name, 
        price:productoPush.price, 
        desc:productoPush.desc    
    }
}

export const findProd =  (uuid: string) =>{
    const indice = productos.findIndex(i=>i.uuid == uuid);
    if (indice >= 0) {
        const prodGet = productos[indice]
        const name = prodGet.name
        const price = prodGet.price
        const desc = prodGet.desc
        return {
            uuid,
            name,
            price,
            desc
        }
    } else {
        throw new Error("Producto no encontrado");
    }
}

export const putProd = (uuid: string, producto: ProductoUpdate) =>{
    const indice = productos.findIndex(i=>i.uuid == uuid);
    if (indice >= 0) {
        const prodGet = productos[indice]
        const name = producto.name || prodGet.name
        const price = producto.price || prodGet.price
        const desc = producto.desc || prodGet.desc
        productos[indice] = { ...productos[indice], ...producto}
        return {
            uuid,
            name,
            price,
            desc
        }
    } else {
        throw new Error("Producto no encontrado");
    }
}

export const deleteProd = (uuid: string) => {
    const indice = productos.findIndex(i=>i.uuid == uuid);
    if (indice >= 0){
        productos = productos.filter(i=>i.uuid !== uuid);
        return ("Producto Eliminado");
    } else {
        return ("Producto no encontrado");
    }
}