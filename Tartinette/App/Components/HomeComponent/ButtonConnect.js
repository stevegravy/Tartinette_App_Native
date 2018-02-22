import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class ButtonConnect extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.displayButton} onPress={() => Actions.connexion()}>
                <View style={styles.greenButton}>
                    <Text style={styles.textConnect}>Connexion</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    displayButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textConnect: {
        color: 'white',
        fontSize: 24,
    },
    greenButton: {
        height: 50,
        width: 300,
        backgroundColor: '#65BB50',
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    }
})