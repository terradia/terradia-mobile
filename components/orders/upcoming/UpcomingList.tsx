import React, { FunctionComponent } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import UpcomingCardHeader from "./UpcomingCardHeader";
import { useNavigation } from "react-navigation-hooks";

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
    const { navigate } = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={ORDER}
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({ item }) => <UpcomingCardHeader grower={item} />}
                ListEmptyComponent={() => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text style={{ fontFamily: "Montserrat" }}>
                            Vous n'avez pas de commande en scours
                        </Text>
                        <TouchableOpacity
                            onPress={(): boolean => navigate("Grower")}
                        >
                            <Text
                                style={{
                                    fontFamily: "Montserrat",
                                    marginTop: 20,
                                    textDecorationLine: "underline"
                                }}
                            >
                                Pourquoi ne pas commander ?
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default UpcomingList;
