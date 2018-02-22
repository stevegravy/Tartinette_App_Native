import React from 'react';
import ButtonPanic from './HomeComponent/ButtonPanic';
import ButtonConnect from "./HomeComponent/ButtonConnect";
import {View , StyleSheet} from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.home}>
                <ButtonPanic/>
                <ButtonConnect/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
