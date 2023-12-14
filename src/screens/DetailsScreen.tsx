import React, { useState, useEffect } from 'react';
import { ethers } from '../ok-ethers';
import { View, Text, Button, ActivityIndicator, StyleSheet,InteractionManager } from 'react-native';
import EthereumService from '../services/EthereumService';
import { SCREEN_TRANSFER } from '../Constants';
import { useMnemonic } from '../contexts/MnemonicContext';

export function DetailsScreen({ route, navigation }: any) {

    const {mnemonic} = useMnemonic();
    const [walletAddress, setWalletAddress] = useState('');
    const [balance, setBalance] = useState('')
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        InteractionManager.runAfterInteractions(async () => {
            try {
              const wallet = await ethers.Wallet.fromPhrase(mnemonic);
              const balance = await EthereumService.getBalance(wallet.address)

              setWalletAddress(wallet.address);
              setBalance(balance);
              
            } catch (error) {
              console.error(error);
            } finally {
              setLoading(false);
            }
          });
    }, []);

    const handleTransferPress = () => {
        navigation.navigate(SCREEN_TRANSFER);
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Text style={styles.Tips}>Your WalletAddress</Text>
                    <Text style={styles.addressText}>{walletAddress}</Text>
                    <Text style={styles.Tips}>Your Balance</Text>
                    <Text style={styles.addressText}>{balance}</Text>
                    <Button
                        title="Transfer"
                        onPress={handleTransferPress}
                        />
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
        fontSize: 14,
    },
    Tips: {
        color: 'black',
        fontSize: 20,
    }
});
