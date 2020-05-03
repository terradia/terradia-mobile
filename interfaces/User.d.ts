import {
    CompanyData,
    CompanyReviewData,
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
