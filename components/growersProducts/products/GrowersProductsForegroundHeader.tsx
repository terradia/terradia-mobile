import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, AirbnbRating } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles/GrowersProductsForegroundHeader.style";
import { CompanyData } from "@interfaces/Companies";
import { ThemedBox, ThemedText } from "@components/theme/Theme";

declare interface GrowersProductsForegroundHeaderProps {
    grower?: CompanyData;
}

const GrowersProductsForegroundHeader: FunctionComponent<GrowersProductsForegroundHeaderProps> = ({
    grower
}) => {
    return (
        <View style={styles.container}>
            <ThemedBox style={styles.secondContainer}>
                <View style={styles.informationTop}>
                    <Avatar
                        size={80}
                        rounded
                        source={{
                            uri: grower.logo
                                ? "https://media.terradia.eu/" +
                                  grower.logo.filename
                                : "https://media.terradia.eu/20b6aef5bacab850344aa3036f8253e6.jpg"
                        }}
                        containerStyle={[styles.shadow1, styles.growerImage]}
                        imageProps={{ resizeMode: "contain" }}
                    />
                    <View style={styles.middleContainer}>
                        <View style={styles.topContainer}>
                            <View style={styles.tag}>
                                <ThemedText
                                    style={{
                                        fontFamily: "MontserratSemiBold",
                                        color: "white",
                                        fontWeight: "500"
                                    }}
                                >
                                    NOUVEAUTE
                                </ThemedText>
                            </View>
                            <ThemedText style={styles.distanceText}>
                                {!grower.distance
                                    ? "--"
                                    : (grower.distance / 1000)
                                          .toFixed(2)
                                          .replace(".", ",") + " km"}
                            </ThemedText>
                        </View>
                        <View>
                            <ThemedText style={styles.growerName}>
                                {grower.name}
                            </ThemedText>
                        </View>
                        <View style={styles.rates}>
                            <AirbnbRating
                                defaultRating={grower.averageMark}
                                size={18}
                                showRating={false}
                                isDisabled={true}
                                selectedColor={"#FADB14"}
                            />
                            <ThemedText style={styles.textNumberRates}>
                                {grower.numberOfMarks > 99
                                    ? "(99+)"
                                    : "(" + grower.numberOfMarks + ")"}
                            </ThemedText>
                        </View>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <ThemedText numberOfLines={2} style={styles.description}>
                        {grower.description}
                    </ThemedText>
                    <TouchableOpacity style={styles.showMoreContainer}>
                        <FontAwesome
                            style={styles.showMore}
                            name="arrow-down"
                            size={24}
                            color="#4AA542"
                        />
                    </TouchableOpacity>
                </View>
            </ThemedBox>
        </View>
    );
};

export default GrowersProductsForegroundHeader;
