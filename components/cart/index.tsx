import React, { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import Footer from './screens/Footer';
import ModalCart from './modal';

const Cart: FunctionComponent<any> = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <View>
            <Footer setModalOpen={setModalOpen} />
            {isModalOpen ? (
                <ModalCart
                    isModalOpen={isModalOpen}
                    setModalOpen={setModalOpen}
                />
            ) : null}
        </View>
    );
};

export default Cart;
