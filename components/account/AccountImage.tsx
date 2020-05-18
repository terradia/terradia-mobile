import React, { FunctionComponent, useEffect, useState } from 'react';
import { Avatar } from 'react-native-elements';
import ModalSelector from 'react-native-modal-selector';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import updateUserAvatar from '../../graphql/user/updateUserAvatar.graphql';
import { useMutation } from '@apollo/react-hooks';
import { ReactNativeFile } from 'apollo-upload-client';
import { UserData } from '@interfaces/User';
import Spinner from 'react-native-loading-spinner-overlay';
import i18n from '@i18n/i18n';

declare interface AccountImageProps {
    me: UserData;
}

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

const AccountImage: FunctionComponent<AccountImageProps> = ({ me }) => {
    const [hasCameraRoll, setHasCameraRoll] = useState(false);
    const [UpdateUserAvatar, { loading }] = useMutation(updateUserAvatar);
    const getPermissionAsync = async (): Promise<boolean> => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );
            if (status !== 'granted') {
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
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.2
            });
            if (!result.cancelled) {
                const file = new ReactNativeFile({
                    uri: result.uri,
                    name: new Date().getTime() + me.id + '.jpg',
                    type: 'image/jpeg'
                });

                UpdateUserAvatar({
                    variables: { avatar: file }
                });
                // this.setState({ image: result.uri });
            }
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
            <Spinner
                visible={loading}
                textContent={i18n.t('loading')}
                textStyle={{ fontFamily: 'MontserratSemiBold' }}
            />
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
                    title={me.firstName[0] + me.lastName[0]}
                    source={{
                        uri:
                            'https://terradia-bucket-assets.s3.eu-west-3.amazonaws.com/' +
                            me.avatar
                    }}
                />
            </ModalSelector>
        </>
    );
};

export default AccountImage;
