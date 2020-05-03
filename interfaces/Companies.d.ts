import { CustomerData } from '@interfaces/User';

export interface CompaniesData {
    getAllCompanies: CompanyData[];
}

export interface CompanyData {
    name: string;
    id: string;
    averageMark: number;
    numberOfMarks: number;
    description: string;
    productsCategories: ProductsCategoryData[];
}

interface ProductsCategoryData {
    name: string;
    products: ProductData[];
}

export interface ProductData {
    reviews: ReviewData[];
    name: string;
    id: string;
    numberOfMarks: number;
    description: string;
    price: number;
}

interface ReviewData {
    title: string;
    id: any;
    description: string;
    customerMark: number;
    customer: any;
}

export interface CompanyReviewData {
    company: CompanyData;
    customer: CustomerData;
    customerMark: number;
    description: string;
    id: string;
    title: string;
}
