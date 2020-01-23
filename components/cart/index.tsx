import React, { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import Footer from './screens/Footer';
import ModalCart from './modal';

const Cart: FunctionComponent<any> = () => {
    const [isModalOpen, setModalOpen] = useState(true);

    return (
        <View>
            <Footer setModalOpen={setModalOpen} />
            <ModalCart isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
        </View>
    );
};

export default Cart;
