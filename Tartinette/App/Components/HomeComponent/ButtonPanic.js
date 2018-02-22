import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class ButtonPanic extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={() => Actions.child()} style={styles.displayButton}>
                <View style={styles.redButton}>
                    <Text style={styles.textPanic}>Panic</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    redButton: {
        backgroundColor: 'red',
        margin: 'auto',
        width: 150,
        borderRadius: 100,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: 'black',
        flexDirection: 'row',
    },
    textPanic: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    displayButton: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})