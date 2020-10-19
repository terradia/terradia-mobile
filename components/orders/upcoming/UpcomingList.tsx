import React, { FunctionComponent } from "react";
import { FlatList, View } from "react-native";
import UpcomingCardHeader from "./UpcomingCardHeader";

const ORDER = [
    {
        id: "60f36cb1-13f5-4a9c-acf1-72890bb5db24",
        name: "zqdzqdqzzdqz"
    },
    {
        id: "b806e398-549c-41d3-9da8-10566cffaf17",
        name: "zqdzqdqzzdqz"
    }
];

const UpcomingList: FunctionComponent = () => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={ORDER}
                renderItem={({ item }) => <UpcomingCardHeader grower={item} />}
            />
        </View>
    );
};

export default UpcomingList;
