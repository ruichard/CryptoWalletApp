import React, { useState, useEffect } from 'react';
import { View, Button, Text, ActivityIndicator, InteractionManager } from 'react-native';
import { Mnemonic } from 'ethers';
import '../../shim.js';
import crypto from 'crypto'
import { Card } from 'react-native-paper';
import { SCREEN_DETAILS } from '../Constants';
import { useMnemonic } from '../contexts/MnemonicContext';

export function RegistrationScreen(props: any) {
    const {mnemonic, setMnemonic} = useMnemonic();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        InteractionManager.runAfterInteractions(async () => {
        try {
            const mnemonic = Mnemonic.fromEntropy(crypto.randomBytes(16))
            setMnemonic(mnemonic.phrase);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
    });
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <Text style={{ fontSize: 20, color: 'blue', fontWeight: 'bold', marginBottom: 20 }}>
              Backup your wallet mnemonic
            </Text>
            <Card style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 20, padding: 10 }}>{mnemonic}</Text>
            </Card>
            <Button
              title="Enter Wallet"
              onPress={() => {
                props.navigation.navigate(SCREEN_DETAILS);
              }}
            />
          </>
        )}
      </View>
      
    );
}