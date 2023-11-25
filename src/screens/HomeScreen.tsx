import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export function HomeScreen(props: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Create Wallet"
                onPress={() => {
                    props.navigation.navigate('Registration')
                }
                }
            />
        </View>
    );
}