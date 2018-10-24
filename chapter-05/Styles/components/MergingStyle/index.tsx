import React, { Component, ReactNode } from "react";
import { StyleSheet, View, Button, TextStyle, ViewStyle } from "react-native";

type Props = {
    children: ReactNode,
};

type State = {
    touching: boolean,
};

export default class PressButton extends Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = { touching: false };
    }

    public render () {
        return (
            <View style={[this.state.touching && styles.button, styles.accentText]}>
                 <Button title="Press me" onPress={this.onPress}>
                     {this.props.children}
                 </Button>
             </View>
        );
    }

    private onPress = () => this.setState(prevState => ({ touching: !prevState.touching }));
}

type Style = {
    button: ViewStyle;
    accentText: TextStyle;
};

const styles = StyleSheet.create<Style>({
    button: {
        borderRadius: 8,
        backgroundColor: "#99CCFF",
    },
    accentText: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
