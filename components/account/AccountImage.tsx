import React, { FunctionComponent, useEffect, useState } from 'react';
import { Avatar } from 'react-native-elements';
import ModalSelector from 'react-native-modal-selector';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const DATA_SELECT = [
    {
        key: 0,
        label: 'With camera'
    },
    {
        key: 1,
        label: 'In library'
    }
];

const AccountImage: FunctionComponent = () => {
    const [hasCameraRoll, setHasCameraRoll] = useState(false);

    const getPermissionAsync = async (): Promise<boolean> => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );
            if (status !== 'granted') {
                console.log('Not granted');
                setHasCameraRoll(false);
                return false;
            }
        }
        setHasCameraRoll(true);
        return true;
    };
    useEffect(() => {
        getPermissionAsync();
    }, []);
    const _pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            });
            // if (!result.cancelled) {
            //     this.setState({ image: result.uri });
            // }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    const _onLibraryClicked = async () => {
        setTimeout(async () => {
            if (hasCameraRoll) {
                _pickImage();
            } else {
                alert(
                    'Sorry, we need camera roll permissions to make this work!'
                );
            }
        }, 400);
    };
    return (
        <>
            <ModalSelector
                overlayStyle={{
                    flex: 1,
                    padding: '2%',
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(0,0,0,0.7)'
                }}
                animationType={'fade'}
                data={DATA_SELECT}
                onChange={(option): void => {
                    if (option.key === 1) {
                        _onLibraryClicked();
                    }
                }}
            >
                <Avatar
                    showAccessory
                    size={140}
                    rounded
                    source={{
                        uri:
                            'https://labo-typo.fr/wp-content/uploads/2015/08/labo-typo-laure-saigne-au-brasseur-strasbourg-logo-1468x1525.jpg'
                    }}
                />
            </ModalSelector>
        </>
    );
};

export default AccountImage;
