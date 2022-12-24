export interface Producto {
    uuid: string;
    name: string;
    price: number;
    desc: string
}

export interface ProductoCreate {
    name: string;
    price: number;
    desc: string
}

export interface ProductoUpdate {
    name?: string;
    price?: number;
    desc?: string
}