import React, { FunctionComponent, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HeaderAccount from "@components/account/Header";
import i18n from "@i18n/i18n";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import Spinner from "react-native-loading-spinner-overlay";
import DeleteCard from "../../graphql/wallet/deleteCard.graphql";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import CreditCardDisplay from "react-native-credit-card-display";
import ListCustomerCards from "../../graphql/wallet/listCustomerCards.graphql";

const CardEditor: FunctionComponent = () => {
    const number = useNavigationParam("number");
    const expiry = useNavigationParam("expiry");
    const brand = useNavigationParam("brand");
    const cardId = useNavigationParam("cardId");
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

    const _createStripeToken = async (): Promise<void> => {
        return;
    };

    return (
        <>
            <Spinner
                visible={isLoading}
                textContent={i18n.t("loading")}
                textStyle={{ fontFamily: "MontserratSemiBold" }}
            />

            <HeaderAccount title={"Ma carte"} backButton={true} />
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
        </>
    );
};

export default CardEditor;
