import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TextField from '../components/textField/textField';
import KeyboardBtn from '../components/keyboardBtn/keyboardBtn';
import calc from '../modules/calc';

const keysMock = ['+', '-', '*', '/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '='];

export default class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboardBtnMap: null,
            operator: '',
            result: '',
        }
    }

    componentDidMount() {
        this.getKeyboardBtn(keysMock);
    }

    setOperator = (text) => {
        let { operator, result } = this.state;
        if (!operator) {
            const newResult = result + text;
            this.setState({ operator: text, result: newResult });
        }
    }

    setNumber = (text) => {
        let { result } = this.state;
        const newResult = result + text;
        this.setState({ result: newResult });
    }

    getCount = () => {
        let { result, operator } = this.state;
        const arrayResult = result.split(operator);
        const firstOperand = Number.parseInt(arrayResult[0]);
        const secondOperand = Number.parseInt(arrayResult[1]);
        const newResult = calc(firstOperand, secondOperand, operator);
        this.setState({ result: newResult });
    }


    getKeyboardBtn = (keysMock) => {
        let keyboardBtnMap = null;
        if (keysMock) {
            keyboardBtnMap = keysMock.map((item, index) => {
                if (index === keysMock.length - 1) {
                    return <KeyboardBtn key={item} onClick={this.getCount} text={item} />
                }
                if (index >= 0 && index <= 3) {
                    return <KeyboardBtn key={item} onClick={this.setOperator} text={item} />
                } else {
                    return <KeyboardBtn key={item} onClick={this.setNumber} text={item} />

                }
            });
        }
        this.setState({ keyboardBtnMap });
    }


    render() {
        const { result, keyboardBtnMap } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <TextField text={result} />
                <View style={{ width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {keyboardBtnMap}
                </View>
            </View>
        )
    }
}