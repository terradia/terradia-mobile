export declare interface GrowersConfig {
    id: string;
    averageMark: number;
    description: string;
    name: string;
    numberOfMarks: number;
    products: Array<GrowersProductsConfig>;
}

export declare interface GrowersProductsConfig {
    name: string;
    description: string;
}
