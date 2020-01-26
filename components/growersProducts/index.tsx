import React, { FunctionComponent, useEffect, useState } from 'react';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import COMPANY from '../../graphql/company.graphql';
import getCompany from '../../graphql/getCompany.graphql';
import { Company } from '@interfaces/Companies';
import LoadingState from './Loading';
import GrowerProductsList from './GrowerProductsList';

const HEADER_SIZE = 170;
const LIST_HEADER_HEIGHT = 40;
const LIST_ELEM_HEIGHT = 135;

declare interface GrowersProductsScreen {
    navigation?: NavigationStackScreenProps;
}

const GrowerProducts: FunctionComponent<GrowersProductsScreen> = ({
    navigation
}) => {
    const [display, setDisplay] = useState(false);
    const [positionArray, setPositionArray] = useState([]);
    const growerId = useNavigationParam('grower');
    const [company, setCompany] = useState();
    const { navigate } = useNavigation();

    const [loadCompany] = useLazyQuery<{
        getCompany: Company;
    }>(getCompany, {
        variables: { id: growerId },
        fetchPolicy: 'network-only',
        onCompleted: data => {
            setCompany(data.getCompany);
        },
        onError: error => {
            console.log(error);
            navigate('Grower');
        }
    });
    useQuery(COMPANY, {
        fetchPolicy: 'cache-only',
        variables: { id: growerId },
        onCompleted: data => {
            if (!data || !data.company) {
                console.log("Loading company");
                loadCompany();
            }
            else setCompany(data.company);
        }
    });

    const [products, setProducts] = useState([]);

    const getArrayGoodName = (): any => {
        const obj = company.productsCategories.map(function(obj) {
            Object.defineProperty(
                obj,
                'title',
                Object.getOwnPropertyDescriptor(obj, 'name')
            );

            Object.defineProperty(
                obj,
                'data',
                Object.getOwnPropertyDescriptor(obj, 'products')
            );
            return obj;
        });
        setProducts(obj);
        return obj;
    };
    // const [products, setProducts] = useState(getArrayGoodName());
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
        if (!company) return;
        const obj = getArrayGoodName();
        fillArrayPositions(obj);
        setDisplay(true);
    }, [company]);

    if (display && company) {
        return (
            <GrowerProductsList
                products={products}
                company={company}
                positionArray={positionArray}
                navigation={navigation}
            />
        );
    } else {
        return <LoadingState />;
    }
};

export default GrowerProducts;
