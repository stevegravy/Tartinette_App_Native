import React from 'react';
import {CheckBox , View , Text , StyleSheet} from 'react-native';

export default class Child extends React.Component {
    constructor(){
        super();
        this.state = {
            checked: true
        }
    }

    render() {
        return (
            <View style={styles.global}>
                <CheckBox value={this.state.checked}
                          onValueChange={() => this.setState({ checked: !this.state.checked })} />
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    global: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
    }
})