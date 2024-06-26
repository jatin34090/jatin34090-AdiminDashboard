


export type OrderItemType = {
    name: string,
    photo: string,
    price: number,
    quentity: number,
    _id: string
}


export type OrderType = {
    name: string,
    address: string,
    city: string,
    country: string,
    state: string,
    pinCode: number,
    status: "Processing" | "Shipped" | "Delivered",
    subtotal: number,
    discount: number,
    shippingCharge: number,
    tax: number,
    total: number,
    orderItems: OrderItemType[],
    _id: string
}