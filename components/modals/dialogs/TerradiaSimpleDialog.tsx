import React, { FunctionComponent, useState } from "react";
import { ConfirmDialog } from "react-native-simple-dialogs";

declare interface TerradiaSimpleDialog {
    title: string;
    message: string;
    positiveButtonTitle: string;
    negativeButtonTitle: string;
    isDialogVisible: boolean;
    setDialogVisible: (boolean) => void;
    onDialogYesPressed: () => void;
    onDialogNoPressed: () => void;
}

const TerradiaSimpleDialog: FunctionComponent<TerradiaSimpleDialog> = ({
    title,
    message,
    positiveButtonTitle,
    negativeButtonTitle,
    isDialogVisible,
    setDialogVisible,
    onDialogNoPressed,
    onDialogYesPressed
}) => {
    return (
        <ConfirmDialog
            visible={isDialogVisible}
            title={title}
            message={message}
            animationType={"fade"}
            onTouchOutside={(): void => {
                setDialogVisible(false);
            }}
            messageStyle={{
                fontFamily: "Montserrat",
                color: "#575757",
                fontSize: 15
            }}
            titleStyle={{ color: "#5CC04A", fontFamily: "MontserratSemiBold" }}
            positiveButton={{
                title: positiveButtonTitle,
                onPress: (): void => {
                    setDialogVisible(false);
                    onDialogYesPressed();
                },
                titleStyle: { color: "#5CC04A" }
            }}
            negativeButton={{
                title: negativeButtonTitle,
                onPress: (): void => {
                    setDialogVisible(false);
                    onDialogNoPressed();
                },
                titleStyle: { color: "#575757" }
            }}
        />
    );
};

export default TerradiaSimpleDialog;
