import React from 'react';
import {Text, StyleSheet , TextInput , View} from 'react-native';

export default class  extends React.Component {
    render() {
        return (
            <View style={styles.global} >
                <Text>Connexion</Text>
                <TextInput type='email'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})