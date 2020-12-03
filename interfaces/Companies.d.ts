import { CustomerData } from "@interfaces/User";

export interface CompaniesData {
    getAllCompanies: CompanyData[];
}
export interface GeographicPointData {
    coordinates: number[];
}

export interface CompanyData {
    name: string;
    id: string;
    averageMark: number;
    numberOfMarks: number;
    description: string;
    productsCategories: ProductsCategoryData[];
    geoPosition: GeographicPointData;
    distance: number;
    products: ProductData[];
    logo: LogoData;
    cover: LogoData;
    numberProducts: number;
}

interface LogoData {
    filename: string;
}

export interface ProductsCategoryData {
    name: string;
    products: ProductData[];
}

interface ProductImageData {
    companyImage: LogoData;
}

export interface ProductData {
    reviews: ReviewData[];
    name: string;
    id: string;
    numberOfMarks: number;
    description: string;
    price: number;
    company: CompanyData;
    cover: ProductImageData;
    quantityForUnit: number;
    unit: UnitData;
}

interface UnitData {
    id: string;
    name: string;
    notation: string;
    referenceUnit: UnitData;
    multiplicationFactor: number;
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

export interface UnitData {
    id: string;
    name: string;
    notation: string;
    referenceUnit: UnitData;
    multiplicationFactor: number;
}

export interface CompanyTagData {
    color: string;
    id: string;
    slugName: string;
    translationKey: string;
}
