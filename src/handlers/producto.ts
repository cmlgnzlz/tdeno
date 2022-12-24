import { Context, helpers } from "../deps.ts";
import type { Producto } from "../types/producto.ts"
import * as db from "../db/producto.ts"

export const findProd = async(ctx: Context) => {
    const { uuid } = await helpers.getQuery(ctx, {mergeParams: true});
    try {
        const prod: Producto = await db.findProd(uuid);
        ctx.response.body = prod
    } catch (err) {
        ctx.response.status = 500;
        ctx.response.body = { msg: err.message }
    }
}

export const postProd= async(ctx: Context) => {
    try{
        const { name, price, desc} = await ctx.request.body().value;
        const createdProd : Producto = db.postProd({
            name,
            price,
            desc
        })
        ctx.response.body = createdProd
    } catch (err) {
        ctx.response.status = 500;
        ctx.response.body = { msg: err.message }
    }
}

export const putProd = async(ctx: Context) => {
    try {
        const { uuid } = await helpers.getQuery(ctx, {mergeParams: true});
        const producto = await ctx.request.body().value;
        const updatedProd : Producto = db.putProd( uuid, producto );
        ctx.response.body = updatedProd
    } catch (err) {
        ctx.response.status = 500;
        ctx.response.body = { msg: err.message }
    }
}

export const deleteProd = async(ctx: Context) => {
    try {
        const { uuid } = await helpers.getQuery(ctx, {mergeParams: true});
        const deleted: string = db.deleteProd( uuid );
        ctx.response.body = deleted
    } catch (err) {
        ctx.response.status = 500;
        ctx.response.body = { msg: err.message }
    }
}


        