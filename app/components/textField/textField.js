import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TextField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text } = this.props;
        return (
            <View style={{
                height: 50,
                marginHorizontal: 10,
                marginVertical: 10,
                borderColor: 'red',
                borderWidth: 2
            }}>
                <Text>
                    {text}
                </Text>
            </View>
        )
    }
}