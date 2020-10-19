import React, { FunctionComponent, useState } from "react";
import { View } from "react-native";
import {
    CreditCardInput,
    LiteCreditCardInput
} from "react-native-input-credit-card";
import HeaderAccount from "@components/account/Header";
import i18n from "@i18n/i18n";
import ButtonTerradia from "@components/buttons/ButtonTerradia";
import { PaymentsStripe as Stripe } from "expo-payments-stripe";
import CreateCard from "../../graphql/wallet/createCard.graphql";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import Spinner from "react-native-loading-spinner-overlay";
import ListCustomerCards from "../../graphql/wallet/listCustomerCards.graphql";
import { useNavigation } from "react-navigation-hooks";

const CardEditor: FunctionComponent = () => {
    const [isValid, setValid] = useState(false);
    const { goBack } = useNavigation();
    const [card, setCard] = useState({ number: "", expiry: "", cvc: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [getCardList, { loading: listLoading }] = useLazyQuery(
        ListCustomerCards,
        {
            fetchPolicy: "network-only",
            onCompleted: () => {
                setIsLoading(false);
                goBack();
            }
        }
    );
    const [createCard, { loading }] = useMutation(CreateCard, {
        onCompleted: () => {
            getCardList();
        }
    });

    const _onChange = (data): void => {
        if (data.valid) {
            setCard(data.values);
            setValid(true);
        } else setValid(false);
    };

    const _createStripeToken = async (): Promise<void> => {
        setIsLoading(true);
        const params = {
            // mandatory
            number: card.number,
            expMonth: parseInt(card.expiry.substr(0, 2)),
            expYear: parseInt(card.expiry.substr(3, 4)),
            cvc: card.cvc
        };
        console.log(params);
        const token = await Stripe.createTokenWithCardAsync(params);
        createCard({ variables: { cardId: token.tokenId } });
        console.log(token);
    };

    return (
        <>
            <Spinner
                visible={isLoading}
                textContent={i18n.t("loading")}
                textStyle={{ fontFamily: "MontserratSemiBold" }}
            />
            <HeaderAccount
                title={"Editer/ajouter une carte"}
                backButton={true}
            />
            <CreditCardInput
                onChange={_onChange}
                allowScroll={true}
                inputStyle={{ fontFamily: "Montserrat" }}
                labels={{
                    name: "",
                    postalCode: "",
                    number: i18n.t("walletScreen.cardNumber"),
                    expiry: i18n.t("walletScreen.expiry"),
                    cvc: "CVC/CCV"
                }}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <ButtonTerradia
                    title={i18n.t("walletScreen.addCard")}
                    style={[{ borderColor: "transparent", width: 300 }]}
                    titleStyle={[
                        {
                            color: "#FFFFFF",
                            fontFamily: "MontserratSemiBold"
                        }
                    ]}
                    disabled={!isValid}
                    loading={false}
                    onPress={async (): Promise<void> => {
                        await _createStripeToken();
                    }}
                />
            </View>
        </>
    );
};

export default CardEditor;
