import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { Mnemonic } from 'ethers';
import '../../shim.js';
import crypto from 'crypto'

export function RegistrationScreen(props: any) {
    const [mnemonic, setMnemonic] = useState('');

    useEffect(() => {
        const mnemonic = Mnemonic.fromEntropy(crypto.randomBytes(16))
        setMnemonic(mnemonic.phrase);

    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color: 'blue', fontWeight: 'bold' }}>
                Back up your wallet mnemonic
            </Text>
            <Text style={{ fontSize: 20 }}>{mnemonic}</Text>
            <Button
                title="Enter Wallet"
                onPress={() => {
                    props.navigation.navigate('Details', {
                        mnemonic: mnemonic,
                    });
                }
                }
            />
        </View>
    );
}
