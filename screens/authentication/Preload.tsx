import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import getUser from "./../../graphql/getUser.graphql";
import getActiveAddress from "../../graphql/getActiveAddress.graphql";
import getAddressesByUser from "../../graphql/getAddressesByUser.graphql";
import getCompaniesByDistanceByCustomer from "../../graphql/getCompaniesByDistanceByCustomer.graphql";

import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { CustomerAddressData } from "@interfaces/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface MyInputHandles {
    preload(): void;
}

const Preload: React.ForwardRefExoticComponent<React.PropsWithoutRef<{
    children?: any;
}> &
    React.RefAttributes<any>> = forwardRef(({ children }, ref) => {
    const { navigate } = useNavigation();
    const [path, setPath] = useState("");
    const [urlQueryParams, setQueryParams] = useState(null);

    const _redirect = () => {
        if (path === "") navigate("App", { screen: "Growers" });
        else if (path === "GrowersProducts" && urlQueryParams.company) {
            navigate("GrowersProducts", {
                grower: urlQueryParams.company
            });
        } else navigate(path);
    };

    const [loadActiveAddress, { data: activeAddress, client }] = useLazyQuery<{
        getActiveCustomerAddress: CustomerAddressData;
    }>(getActiveAddress, {
        fetchPolicy: "network-only",
        onCompleted: data => {
            if (data && data.getActiveCustomerAddress) {
                client.query({ query: getAddressesByUser });
                client.query({ query: getCompaniesByDistanceByCustomer });
                _redirect();
            } else navigate("Location");
        },
        onError: async error => {
            console.warn(error);
            await AsyncStorage.removeItem("token");
            navigate("HomeAuth");
        }
    });
    const [loadUser] = useLazyQuery(getUser, {
        fetchPolicy: "network-only",
        onCompleted: data => {
            if (data && data.getUser) {
                loadActiveAddress();
            } else navigate("HomeAuth");
        },
        onError: async onerror => {
            console.warn(onerror);
            await AsyncStorage.removeItem("token");
            navigate("HomeAuth");
        }
    });
    const _loadData = async () => {
        Linking.getInitialURL().then(data => {
            if (data) {
                console.log(data);
                const { path, queryParams } = Linking.parse(data);
                setQueryParams({ ...queryParams });
                if (path) setPath(path.replace("--/", ""));
            }

            loadUser();
        });
    };
    useImperativeHandle(ref, () => ({
        preload: (): void => {
            _loadData();
        }
    }));

    return null;
});

export default Preload;
