import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, AirbnbRating } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles/GrowersProductsForegroundHeader.style";
import { CompanyData } from "@interfaces/Companies";

declare interface GrowersProductsForegroundHeaderProps {
    grower?: CompanyData;
}

const GrowersProductsForegroundHeader: FunctionComponent<GrowersProductsForegroundHeaderProps> = ({
    grower
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
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
                    />
                    <View style={styles.middleContainer}>
                        <View style={styles.topContainer}>
                            <View style={styles.tag}>
                                <Text
                                    style={{
                                        fontFamily: "MontserratSemiBold",
                                        color: "white",
                                        fontWeight: "500"
                                    }}
                                >
                                    NOUVEAUTE
                                </Text>
                            </View>
                            <Text style={styles.distanceText}>
                                {!grower.distance
                                    ? "~1 km"
                                    : (grower.distance / 1000).toFixed(2) +
                                      " km"}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.growerName}>{grower.name}</Text>
                        </View>
                        <View style={styles.rates}>
                            <AirbnbRating
                                defaultRating={grower.averageMark}
                                size={18}
                                showRating={false}
                                isDisabled={true}
                                selectedColor={"#4AA542"}
                            />
                            <Text style={styles.textNumberRates}>
                                {grower.numberOfMarks > 99
                                    ? "(99+)"
                                    : "(" + grower.numberOfMarks + ")"}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text numberOfLines={2} style={styles.description}>
                        {grower.description}
                    </Text>
                    <TouchableOpacity style={styles.showMoreContainer}>
                        <FontAwesome
                            style={styles.showMore}
                            name="arrow-down"
                            size={24}
                            color="#4AA542"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default GrowersProductsForegroundHeader;
