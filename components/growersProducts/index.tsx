import React, {
    FunctionComponent,
    ReactElement,
    useEffect,
    useState
} from "react";

import { useQuery } from "@apollo/react-hooks";
import COMPANY from "../../graphql/company.graphql";
import { CompanyData, ProductsCategoryData } from "@interfaces/Companies";
import LoadingState from "./Loading";
import GrowerProductsList from "./GrowerProductsList";
import getCompanyProductsCategories from "../../graphql/product/getCompanyProductsCategories.graphql";

const HEADER_SIZE = 170;
const LIST_HEADER_HEIGHT = 40;
const LIST_ELEM_HEIGHT = 135;

interface GrowerProductsData {
    growerId: string;
    distance: number;
}
interface GetCompanyProductsCategoriesData {
    getCompanyProductsCategories: [ProductsCategoryData];
}
const GrowerProducts: FunctionComponent<GrowerProductsData> = ({
    growerId,
    distance
}): ReactElement => {
    const [display, setDisplay] = useState(false);
    const [positionArray, setPositionArray] = useState([]);
    const [company, setCompany] = useState(null);
    const [products, setProducts] = useState([]);

    const { data } = useQuery(COMPANY, {
        variables: { id: growerId },
        onCompleted: data => {
            console.log(data);
            setCompany({ ...data?.getCompany, distance });
        }
    });

    const { data: categoriesProducts } = useQuery<
        GetCompanyProductsCategoriesData
    >(getCompanyProductsCategories, {
        variables: { companyId: growerId }
    });

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

    if (display && company) {
        return (
            <GrowerProductsList
                products={products}
                company={company}
                positionArray={positionArray}
            />
        );
    } else {
        return <LoadingState />;
    }
};

export default GrowerProducts;
