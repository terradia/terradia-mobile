export interface CompaniesData {
    getAllCompanies: Company[];
}

interface Company {
    name: string;
    id: string;
    averageMark: number;
    numberOfMarks: number;
    description: string;
    productsCategories: ProductsCategory[];
}

interface ProductsCategory {
    name: string;
    products: Product[];
}

interface Product {
    reviews: Reviews[];
    name: string;
    id: string;
    numberOfMarks: number;
    description: string;
}

interface Reviews {
    title: string;
    id: any;
    description: string;
    customerMark: number;
    customer: any;
}
