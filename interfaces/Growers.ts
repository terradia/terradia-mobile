import { NavigationStackScreenProps } from 'react-navigation-stack';

export declare interface GrowersConfig {
    averageMark: number;
    description: string;
    name: string;
    numberOfMarks: number;
    products: Array<GrowersProductsConfig>;
}

declare interface GrowersProductsConfig {
    name: string;
}
