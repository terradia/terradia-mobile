import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles/UpcomingCardContent.style";

const UpcomingCardContent: FunctionComponent = () => {
    return (
        <View>
            <View style={styles.orderContainer}>
                <Text style={styles.orderText}>Commande </Text>
                <Text style={styles.orderNumber}>#1234</Text>
            </View>
            <View style={styles.statusContainer}>
                <View style={styles.statusLine}>
                    <FontAwesome5
                        name="hourglass-start"
                        size={20}
                        color="#5CC04A"
                    />
                    <Text style={styles.statusText}>
                        En cours d'acceptation
                    </Text>
                </View>
                <View style={styles.statusLine}>
                    <FontAwesome5
                        name="calendar-alt"
                        size={20}
                        color="#5CC04A"
                    />
                    <Text style={styles.statusText}>
                        Horaires disponibles une fois la commande acceptée
                    </Text>
                </View>
                <View style={styles.dividerDate}>
                    <View style={styles.divider} />
                    <Text style={styles.dateText}>15 Oct. 2020 10:34</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.numberProductsContainer}>
                        <Text style={styles.numberProductsNumber}>9+</Text>
                    </View>
                    <Text style={styles.numberProductsText}>
                        Nombre de produits
                    </Text>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text style={styles.totalText}>Total : </Text>
                        <Text style={styles.totalNumber}>25,85 €</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.seeOrder}>Voir la commande</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UpcomingCardContent;
