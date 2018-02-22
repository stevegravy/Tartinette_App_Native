import React from 'react';
import {View, StyleSheet} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class Sandwich extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <View>
                <RadioForm
                    style={styles.radio}
                    radio_props={radio_props}
                    initial={0}
                    animation={false}
                    labelHorizontal={false}
                    formHorizontal={true}
                    buttonColor={"#65BB50"}
                    labelColor={"#65BB50"}
                    onPress={(value) => {this.setState({value:value})}}
                />
            </View>
        )
    }
}

const radio_props = [
    {label: 'Normal', value: 'Normal'},
    {label: 'Hallal', value:'Hallal'},
    {label: 'Végétarien', value: 'Végétarien'}
];

const styles = StyleSheet.create({
    radio: {
        justifyContent:'center',
        alignItems: 'center',
    }
})