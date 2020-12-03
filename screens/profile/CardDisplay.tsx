import React, { FunctionComponent, ReactElement, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MainHeader from "@components/theme/MainHeader";
import i18n from "@i18n/i18n";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import Spinner from "react-native-loading-spinner-overlay";
import DeleteCard from "../../graphql/wallet/deleteCard.graphql";
import { useNavigation } from "@react-navigation/native";
import CreditCardDisplay from "react-native-credit-card-display";
import ListCustomerCards from "../../graphql/wallet/listCustomerCards.graphql";
import { StackScreenProps } from "@react-navigation/stack";
import { ThemedContainer } from '@components/theme/Theme';

type RootStackParamList = {
    Home: undefined;
    CardEditor: {
        number: number;
        expiry: string;
        brand: string;
        cardId: string;
    };
};
type Props = StackScreenProps<RootStackParamList, "CardEditor">;

const CardEditor = ({ route }: Props): ReactElement => {
    const { number, expiry, brand, cardId } = route.params;

    const { goBack } = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [getCardList] = useLazyQuery(ListCustomerCards, {
        fetchPolicy: "network-only",
        onCompleted: () => {
            setIsLoading(false);
            goBack();
        }
    });
    const [deleteCard] = useMutation(DeleteCard, {
        onCompleted: () => {
            getCardList();
        }
    });

    return (
        <ThemedContainer style={{ flex :1}}>
            <Spinner
                visible={isLoading}
                textContent={i18n.t("loading")}
                textStyle={{ fontFamily: "MontserratSemiBold" }}
            />

            <MainHeader title={"Ma carte"} backButton={true} />
            <View style={{ alignItems: "center" }}>
                <CreditCardDisplay
                    number={number}
                    cvc={"···"}
                    expiration={expiry}
                    brand={brand.toLowerCase()}
                />
            </View>
            <TouchableOpacity
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20
                }}
                onPress={(): void => {
                    setIsLoading(true);
                    deleteCard({ variables: { cardId } });
                }}
            >
                <Text style={{ color: "red", fontFamily: "Montserrat" }}>
                    Supprimer la carte
                </Text>
            </TouchableOpacity>
        </ThemedContainer>
    );
};

export default CardEditor;
