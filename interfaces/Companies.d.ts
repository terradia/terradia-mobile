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
    name: string;
    id: string;
    description: string;
}
