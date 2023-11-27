import React from 'react';
import { View, Button } from 'react-native';
import { SCREEN_REGISTRATION } from '../Constants';

export function HomeScreen(props: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Create Wallet"
                onPress={() => {
                    props.navigation.navigate(SCREEN_REGISTRATION)
                }
                }
            />
        </View>
    );
}