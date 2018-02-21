import React from 'react';
import {Text, StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';

export default class  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'Email Placeholder',
            password: 'Password Placeholder'
        };
    }

    render() {
        return (
            <View style={styles.global}>
                <Text>Connectez-vous</Text>
                <TextInput style={styles.input}
                           onChangeText={(email) => this.setState({email: email})}
                           placeholder='Email'
                           underlineColorAndroid="transparent"/>
                <TextInput style={styles.input}
                           onChangeText={(password) => this.setState({password: password})}
                           placeholder='Password'
                           underlineColorAndroid="transparent"/>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.greenButton}>
                        <Text>Connexion</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        justifyContent: 'center',
        margin: 15,
        flexDirection: 'column',
    },
    greenButton: {
        height: 50,
        width: 200,
        backgroundColor: '#65BB50',
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        margin: 0,
    },
    input: {
        height: 60,
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 20,
        padding: 20,
    },
    button: {
        alignItems:'center',
    }
})