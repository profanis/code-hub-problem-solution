export interface OrderModel {
    user: string;
    products: ProductModel[];
}

export interface ProductModel {
    name: string;
    desc: string;
    price: number;
}