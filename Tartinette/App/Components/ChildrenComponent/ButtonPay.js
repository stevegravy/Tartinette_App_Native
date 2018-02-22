import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class ButtonPay extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.displayButton}>
                <View style={styles.greenButton}>
                    <Text style={styles.text}>Payer</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    greenButton: {
        height: 50,
        width: 300,
        backgroundColor: '#65BB50',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
    displayButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        flex: 2,
    },
})