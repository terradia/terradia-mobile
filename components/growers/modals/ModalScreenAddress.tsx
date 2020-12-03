import React, { FunctionComponent, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import ModalScreenAddressSelect from "./ModalScreenAddressSelect";
import { Feather } from "@expo/vector-icons";
import ModalScreenAddressDetails from "./ModalScreenAddressDetails";
import i18n from "@i18n/i18n";
import styles from "./styles/ModalScreenAddress.style";
import {
    ThemedContainer,
    ThemedIcon,
    ThemedText
} from "@components/theme/Theme";

declare interface ModalScreenAddressSelectProps {
    isOpen: boolean;
    setDisplayModalAddress: any;
}

const ModalScreenAddress: FunctionComponent<ModalScreenAddressSelectProps> = ({
    isOpen,
    setDisplayModalAddress
}) => {
    const [isSearching, setIsSearching] = useState(true);
    const [currentAddress, setCurrentAddress] = useState(null);

    const closeModal = (value): void => {
        setIsSearching(true);
        setDisplayModalAddress(value);
    };
    return (
        <ThemedContainer style={styles.container}>
            <Modal
                isVisible={isOpen}
                style={styles.modalContainer}
                onSwipeComplete={(): void => setDisplayModalAddress(false)}
                swipeDirection={["down"]}
                propagateSwipe={true}
            >
                <ThemedContainer>
                    <View style={styles.header}>
                        {isSearching ? (
                            <TouchableOpacity
                                onPress={() => setDisplayModalAddress(false)}
                            >
                                <ThemedIcon
                                    icon={<Feather name="x" size={24} />}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={() => setIsSearching(true)}
                            >
                                <ThemedIcon
                                    icon={
                                        <Feather name="arrow-left" size={24} />
                                    }
                                />
                            </TouchableOpacity>
                        )}
                        <ThemedText style={styles.headerTitle}>
                            {isSearching
                                ? i18n.t("addressModal.deliveryAddress")
                                : i18n.t("addressModal.deliveryDetails")}
                        </ThemedText>
                        <View />
                    </View>
                    {isSearching ? (
                        <ModalScreenAddressSelect
                            setIsSearching={setIsSearching}
                            setCurrentAddress={setCurrentAddress}
                            setDisplayModalAddress={closeModal}
                        />
                    ) : (
                        <ModalScreenAddressDetails
                            mainAddress={currentAddress}
                            setDisplayModalAddress={closeModal}
                        />
                    )}
                </ThemedContainer>
            </Modal>
        </ThemedContainer>
    );
};

export default ModalScreenAddress;
