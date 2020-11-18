import { Dimensions } from "react-native";

// This file is providing functions as helpers to handle the responsive
// of the app on all the devices Android and iOS.
// The principle is simple, it calculates a value based on
// a percentage of the device width / height that you give to the function.

export function calcWidth(
    percentageOfDeviceToTake: number,
    maxValue?: number
): number {
    const screenWidth = Dimensions.get("window").width;
    const result = Math.round((screenWidth * percentageOfDeviceToTake) / 100);
    return maxValue && result > maxValue ? maxValue : result;
}

export function calcHeight(
    percentageOfDeviceToTake: number,
    maxValue?: number
): number {
    const screenHeight = Dimensions.get("window").height;
    const result = Math.round((screenHeight * percentageOfDeviceToTake) / 100);
    return maxValue && result > maxValue ? maxValue : result;
}
