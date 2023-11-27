import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { Mnemonic } from 'ethers';
import '../../shim.js';
import crypto from 'crypto'
import { Card } from 'react-native-paper';
import { SCREEN_DETAILS } from '../Constants';

export function RegistrationScreen(props: any) {
    const [mnemonic, setMnemonic] = useState('');

    useEffect(() => {
        const mnemonic = Mnemonic.fromEntropy(crypto.randomBytes(16))
        setMnemonic(mnemonic.phrase);

    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color: 'blue', fontWeight: 'bold', marginBottom: 20 }}>
                Backup your wallet mnemonic
            </Text>
            <Card style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 20, padding: 10 }}>{mnemonic}</Text>
            </Card>
            <Button
                title="Enter Wallet"
                onPress={() => {
                    props.navigation.navigate(SCREEN_DETAILS, {
                        mnemonic: mnemonic,
                    });
                }
                }
            />
        </View>
    );
}
