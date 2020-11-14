import React, { FunctionComponent, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    AsyncStorage
} from "react-native";
import MainHeader from "@components/theme/MainHeader";
import { Entypo } from "@expo/vector-icons";
import AccountModal from "@components/account/modal/AccountModal";
import i18n from "@i18n/i18n";
import { useQuery } from "@apollo/react-hooks";
import { GetUserData } from "@interfaces/User";
import getUser from "../../graphql/getUser.graphql";
import AccountImage from "@components/account/AccountImage";
import styles from "./styles/Account.style";
import { useNavigation } from "react-navigation-hooks";

const Account: FunctionComponent = () => {
    const [currentEditing, setCurrentEditing] = useState(null);
    const [initialValue, setInitialValue] = useState("");
    const { navigate } = useNavigation();
    const { data: me } = useQuery<GetUserData>(getUser);
    return (
        <View>
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
                <Text style={styles.fieldTitle}>
                    {i18n.t("accountScreen.firstName")}
                </Text>
                <View style={styles.subFieldContainer}>
                    <Text style={styles.subFieldText}>
                        {me.getUser.firstName}
                    </Text>
                    <Entypo name="chevron-right" size={27} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue(me.getUser.lastName);
                    setCurrentEditing("lastName");
                }}
            >
                <Text style={styles.fieldTitle}>
                    {i18n.t("accountScreen.lastName")}
                </Text>
                <View style={styles.subFieldContainer}>
                    <Text style={styles.subFieldText}>
                        {me.getUser.lastName}
                    </Text>
                    <Entypo name="chevron-right" size={27} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue(me.getUser.phone);
                    setCurrentEditing("phoneNumber");
                }}
            >
                <Text style={styles.fieldTitle}>
                    {i18n.t("accountScreen.phoneNumber")}
                </Text>
                <View style={styles.subFieldContainer}>
                    <Text style={styles.subFieldText}>{me.getUser.phone}</Text>
                    <View style={styles.rightContent}>
                        <Text style={styles.verifiedText}>
                            {i18n.t("accountScreen.verified")}
                        </Text>
                        <Entypo name="chevron-right" size={27} />
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
                <Text style={styles.fieldTitle}>
                    {i18n.t("accountScreen.email")}
                </Text>
                <View style={styles.subFieldContainer}>
                    <Text style={styles.subFieldText}>{me.getUser.email}</Text>
                    <View style={styles.rightContent}>
                        <Text style={styles.nonVerifiedText}>
                            {i18n.t("accountScreen.notVerified")}
                        </Text>
                        <Entypo name="chevron-right" size={27} />
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
                <Text style={styles.fieldTitle}>Mot de passe</Text>
                <View style={styles.subFieldContainer}>
                    <TextInput
                        secureTextEntry={true}
                        editable={false}
                        style={styles.subFieldText}
                    >
                        Hello world
                    </TextInput>
                    <View style={styles.rightContent}>
                        <Text style={styles.nonVerifiedText}>Non vérifié</Text>
                        <Entypo name="chevron-right" size={27} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    AsyncStorage.removeItem("token").then(() => {
                        navigate("Login");
                    });
                }}
                style={styles.signOutContainer}
            >
                <Text style={styles.signOut}>
                    {i18n.t("accountScreen.signOut")}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Account;
