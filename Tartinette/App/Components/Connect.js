import React from 'react';
import {Text, StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';

export default class  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    render() {
        return (
            <View style={styles.global}>
                <Text style={styles.title}>Connectez-vous</Text>
                <TextInput style={styles.input}
                           onChangeText={(email) => this.setState({email: email})}
                           placeholder='Email'
                           underlineColorAndroid="#65BB50"/>
                <TextInput style={styles.input}
                           onChangeText={(password) => this.setState({password: password})}
                           placeholder='Password'
                           secureTextEntry={true}
                           underlineColorAndroid="#65BB50"/>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.greenButton}>
                        <Text style={styles.text}>Connexion</Text>
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
        width: 300,
        backgroundColor: '#65BB50',
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        margin: 0,
    },
    input: {
        height: 60,
        marginTop: 20,
        padding: 20,
    },
    button: {
        alignItems:'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
    title: {
        color: '#65BB50',
        fontSize: 20,
        fontWeight: 'bold',
    }
})