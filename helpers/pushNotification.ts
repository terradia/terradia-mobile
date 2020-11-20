import * as Notifications from "expo-notifications";

export async function registerForPushNotificationsAsync() {
    const experienceId = "@dams/terradia";
    await Notifications.requestPermissionsAsync();

    const expoPushToken = await Notifications.getExpoPushTokenAsync({
        experienceId
    });
    return expoPushToken.data;
}
