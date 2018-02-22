import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Child from './ChildrenComponent/Child';
import Sandwich from "./ChildrenComponent/Sandwich";
import ButtonPay from "./ChildrenComponent/ButtonPay";

export default class Children extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Thomas'
        }
    }

    render() {
        return (
            <View style={styles.global}>
                <Text style={styles.title}>Votre Tribu</Text>
                <View style={styles.child}>
                    <Text style={styles.text}>Enfant</Text>
                    <Child name={this.state.name}/>
                </View>
                <View style={styles.sand}>
                    <Text style={styles.text}>Menu</Text>
                    <Sandwich/>
                </View>
                <ButtonPay/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        margin: 15,
        marginTop: 50,
        flexDirection: 'column',
    },
    title: {
        color: '#65BB50',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        color: 'grey',
        marginBottom: 20,
    },
    child: {
        flex: 4,
    },
    sand: {
        flex: 2,
    }
})
