import React, { useState, useEffect } from 'react';
import { ethers } from '../ok-ethers';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export function DetailsScreen({ route, navigation }: any) {

    const { mnemonic } = route.params;
    const [walletAddress, setWalletAddress] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const wallet = await ethers.Wallet.fromPhrase(mnemonic);
                setWalletAddress(wallet.address);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Text style={styles.Tips}>Your WalletAddress</Text>
                    <Text style={styles.addressText}>{walletAddress}</Text>
                </>
            )}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addressText: {
        color: 'blue',
        fontSize: 16,
    },
    Tips: {
        color: 'black',
        fontSize: 20,
    }
});
