import {
    CompanyData,
    CompanyReviewData,
    GeographicPointData,
    ProductData
} from '@interfaces/Companies';

export interface GetUserData {
    getUser: UserData;
}

export interface UserData {
    firstName: string;
    lastName: string;
    companies: CompanyData[];
    customer: CustomerData;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    phone: string;
    validated: boolean;
    avatar: string;
}

export interface CustomerAddressData {
    id: string;
    address: string;
    apartment: string;
    information: string;
    customer: CustomerData;
    location: GeographicPointData;
}

export interface CustomerData {
    cart: Cart;
    companyReviews: CompanyReviewData[];
    favoriteCompanies: CompanyData[];
    id: string;
    user: UserData;
}

export interface CartData {
    company: CompanyData;
    createdAt: Date;
    customer: CustomerData;
    expirationDate: Date;
    id: string;
    products: CartProductData[];
    totalPrice: number;
    updatedAt: Date;
}

export interface CartProductData {
    cart: CartData;
    id: string;
    product: ProductData;
    quantity: number;
}
