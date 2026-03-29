import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Order {
    id: bigint;
    orderStatus: OrderStatus;
    paymentOption: PaymentOption;
    name: string;
    createdAt: Time;
    deliveryTime: bigint;
    videoLink: string;
    email: string;
    style: string;
    thumbnailText: string;
}
export interface ContactMessage {
    name: string;
    createdAt: Time;
    email: string;
    message: string;
}
export enum OrderStatus {
    pending = "pending",
    delivered = "delivered",
    inProgress = "inProgress"
}
export enum PaymentOption {
    creditcard = "creditcard",
    crypto = "crypto",
    paypal = "paypal"
}
export interface backendInterface {
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getAllOrders(): Promise<Array<Order>>;
    submitContactMessage(message: ContactMessage): Promise<void>;
    submitOrder(order: Order): Promise<void>;
}
