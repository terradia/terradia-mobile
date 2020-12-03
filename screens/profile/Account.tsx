import React, { FunctionComponent, useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainHeader from "@components/theme/MainHeader";
import { Entypo } from "@expo/vector-icons";
import AccountModal from "@components/account/modal/AccountModal";
import i18n from "@i18n/i18n";
import { useQuery } from "@apollo/react-hooks";
import { GetUserData } from "@interfaces/User";
import getUser from "../../graphql/getUser.graphql";
import AccountImage from "@components/account/AccountImage";
import styles from "./styles/Account.style";
import { useNavigation } from "@react-navigation/native";
import { ThemedContainer, ThemedText } from "@components/theme/Theme";

const Account: FunctionComponent = () => {
    const [currentEditing, setCurrentEditing] = useState(null);
    const [initialValue, setInitialValue] = useState("");
    const { navigate } = useNavigation();
    const { data: me } = useQuery<GetUserData>(getUser);
    return (
        <ThemedContainer style={{ flex: 1 }}>
            <AccountModal
                currentEditing={currentEditing}
                setCurrentEditing={setCurrentEditing}
                initialValue={initialValue}
            />
            <MainHeader title={"Mon compte"} backButton={true} />
            <View style={styles.imageContainer}>
                <AccountImage me={me && me.getUser} />
            </View>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue(me.getUser.firstName);
                    setCurrentEditing("firstName");
                }}
            >
                <ThemedText style={styles.fieldTitle}>
                    {i18n.t("accountScreen.firstName")}
                </ThemedText>
                <View style={styles.subFieldContainer}>
                    <ThemedText style={styles.subFieldText}>
                        {me.getUser.firstName}
                    </ThemedText>
                    <ThemedText>
                        <Entypo name="chevron-right" size={27} />
                    </ThemedText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue(me.getUser.lastName);
                    setCurrentEditing("lastName");
                }}
            >
                <ThemedText style={styles.fieldTitle}>
                    {i18n.t("accountScreen.lastName")}
                </ThemedText>
                <View style={styles.subFieldContainer}>
                    <ThemedText style={styles.subFieldText}>
                        {me.getUser.lastName}
                    </ThemedText>
                    <ThemedText>
                        <Entypo name="chevron-right" size={27} />
                    </ThemedText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue(me.getUser.phone);
                    setCurrentEditing("phoneNumber");
                }}
            >
                <ThemedText style={styles.fieldTitle}>
                    {i18n.t("accountScreen.phoneNumber")}
                </ThemedText>
                <View style={styles.subFieldContainer}>
                    <ThemedText style={styles.subFieldText}>
                        {me.getUser.phone}
                    </ThemedText>
                    <View style={styles.rightContent}>
                        <ThemedText>
                            <Entypo name="chevron-right" size={27} />
                        </ThemedText>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue(me.getUser.email);
                    setCurrentEditing("email");
                }}
            >
                <ThemedText style={styles.fieldTitle}>
                    {i18n.t("accountScreen.email")}
                </ThemedText>
                <View style={styles.subFieldContainer}>
                    <ThemedText style={styles.subFieldText}>
                        {me.getUser.email}
                    </ThemedText>
                    <View style={styles.rightContent}>
                        <ThemedText style={styles.nonVerifiedText}>
                            {i18n.t("accountScreen.notVerified")}
                        </ThemedText>
                        <ThemedText>
                            <Entypo name="chevron-right" size={27} />
                        </ThemedText>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue("");
                    setCurrentEditing("password");
                }}
            >
                <ThemedText style={styles.fieldTitle}>Mot de passe</ThemedText>
                <View style={styles.subFieldContainer}>
                    <ThemedText>.........</ThemedText>
                    <View style={styles.rightContent}>
                        <ThemedText>
                            <Entypo name="chevron-right" size={27} />
                        </ThemedText>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    AsyncStorage.removeItem("token").then(() => {
                        AsyncStorage.removeItem("userId").then(() => {
                            navigate("HomeAuth");
                        });
                    });
                }}
                style={styles.signOutContainer}
            >
                <ThemedText style={styles.signOut}>
                    {i18n.t("accountScreen.signOut")}
                </ThemedText>
            </TouchableOpacity>
        </ThemedContainer>
    );
};

export default Account;
