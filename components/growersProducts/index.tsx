import React, {
    FunctionComponent,
    ReactElement,
    useEffect,
    useState
} from "react";

import { useQuery } from "@apollo/react-hooks";
import { CompanyData, ProductsCategoryData } from "@interfaces/Companies";
import LoadingState from "./Loading";
import GrowerProductsList from "./GrowerProductsList";
import getCompanyProductsCategories from "../../graphql/product/getCompanyProductsCategories.graphql";

const HEADER_SIZE = 170;
const LIST_HEADER_HEIGHT = 40;
const LIST_ELEM_HEIGHT = 135;

interface GrowerProductsData {
    grower: CompanyData;
}
interface GetCompanyProductsCategoriesData {
    getCompanyProductsCategories: [ProductsCategoryData];
}
const GrowerProducts: FunctionComponent<GrowerProductsData> = ({
    grower
}): ReactElement => {
    const [display, setDisplay] = useState(false);
    const [positionArray, setPositionArray] = useState([]);

    const { data: categoriesProducts } = useQuery<
        GetCompanyProductsCategoriesData
    >(getCompanyProductsCategories, {
        variables: { companyId: grower.id }
    });

    const [products, setProducts] = useState([]);

    const getArrayGoodName = (): any => {
        const obj = categoriesProducts.getCompanyProductsCategories.map(
            function(obj) {
                Object.defineProperty(
                    obj,
                    "title",
                    Object.getOwnPropertyDescriptor(obj, "name")
                );

                Object.defineProperty(
                    obj,
                    "data",
                    Object.getOwnPropertyDescriptor(obj, "products")
                );
                return obj;
            }
        );
        setProducts(obj);
        return obj;
    };

    /**
     * Create an array of positions
     * Each element of this array is the position of each section
     * First position is Header Size + Section size
     */
    const fillArrayPositions = (obj): void => {
        const arr = [HEADER_SIZE];
        obj.forEach((item, index) => {
            arr.push(
                item.data.length * LIST_ELEM_HEIGHT +
                    LIST_HEADER_HEIGHT +
                    arr[index]
            );
        });
        setPositionArray(arr);
    };

    useEffect(() => {
        if (!categoriesProducts) return;
        const obj = getArrayGoodName();
        fillArrayPositions(obj);
        setDisplay(true);
    }, [categoriesProducts]);

    if (display && grower) {
        return (
            <GrowerProductsList
                products={products}
                company={grower}
                positionArray={positionArray}
            />
        );
    } else {
        return <LoadingState />;
    }
};

export default GrowerProducts;
