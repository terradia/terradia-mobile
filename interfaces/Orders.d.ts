import { CustomerData } from "@interfaces/User";
import { CompanyData, ProductData, UnitData } from "@interfaces/Companies";

export interface OrderHistoryData {
    id: string;
    code: string;
    customerId: string;
    companyId: string;
    companyName: string;
    companyLogo: string;
    companyAddress: string;
    products: [OrderProductHistoryData];
    createdAt: string;
    updatedAt: string;
    price: number;
    numberProducts: number;
    decliningReason: string;
    status: string;
    orderCreationDate: string;
}

export interface OrderProductHistoryData {
    id: string;
    orderHistory: OrderHistoryData;
    productId: string;
    name: string;
    quantity: number;
    price: number;
    unit: UnitData;
    quantityForUnit: number;
}

export interface OrderData {
    coordinates: number[];
    id: string;
    code: string;
    customer: CustomerData;
    company: CompanyData;
    products: [OrderProductData];
    createdAt: string;
    updatedAt: string;
    price: number;
    numberProducts: number;
    status: string;
    decliningReason: string;
}

export interface OrderProductData {
    id: string;
    product: ProductData;
    order: OrderData;
    quantity: number;
    price: number;
}
