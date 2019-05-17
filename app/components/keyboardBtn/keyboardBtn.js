import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class KeyboardBtn extends Component {
    constructor(props) {
        super(props);
    }

    onClick =()=>{
        const { text, onClick} = this.props;
        onClick(text);
    }

    render() {
        const { text } = this.props;
        return (
            <View style={{
                width: '20%',
                height: 50,
                marginHorizontal: 5,
                marginVertical: 5,
                borderColor: 'black',
                borderWidth: 2,
                backgroundColor: 'yellow',
                borderRadius:5
            }}>
                <TouchableOpacity onPress = {this.onClick} style={{flex:1, justifyContent:'center', alignItems:'center',borderRadius:5 }}>
                    <Text>
                        {text}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}