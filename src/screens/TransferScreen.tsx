import React, { useState, useEffect } from 'react';
import { ethers } from '../ok-ethers';
import { SafeAreaView, Text, Button, TextInput, StyleSheet,InteractionManager } from 'react-native';
import EthereumService, { GasFee } from '../services/EthereumService';
import { Card } from 'react-native-paper';

export function TransferScreen({ route }: any) {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [gasFee, setGasFee] = useState<GasFee>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    InteractionManager.runAfterInteractions(async () => {
        try {
          const gasFee = await EthereumService.getGasFee()
          if (gasFee) {
            setGasFee(gasFee);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      });
}, []);

  return (
    <SafeAreaView>
      <Text style={styles.text}>to</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Ethereum Address"
      />
      <Text style={styles.text}>Amount</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="0"
        keyboardType="numeric"
      />
      <Text style={styles.text}>Miner Fee</Text>
      <Card style={{ marginBottom: 20, marginTop: 12, padding:10 }}>
              <Text>Estimated range ({gasFee?.unit})</Text>
              <Text style={{color: 'black'}}> {gasFee?.gasPrice} ~ {gasFee?.maxFeePerGas}</Text>
      </Card>
      <Button title='Send'></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text:{
    marginTop: 12,
    marginLeft: 12
  }
});