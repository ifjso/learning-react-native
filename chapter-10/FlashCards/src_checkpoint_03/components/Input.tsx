import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';

type Props = {
  style?: object;
  clearOnSubmit?: boolean;
  onEntry: (text: string) => void;
  onChange: (text: string) => void;
};

type State = {
  text: string;
};

class Input extends Component<Props, State> {
  static defaultProps = {
    clearOnSubmit: true
  };

  constructor(props: Props) {
    super(props);
    this.state = { text: '' };
  }

  _onSubmit = (ev: any) => {
    this.props.onEntry(ev.nativeEvent.text);
    if (this.props.clearOnSubmit) {
      this.setState({ text: '' });
    }
  };

  _onChange = (text: string) => {
    this.setState({ text });
    if (this.props.onChange) {
      this.props.onChange(text);
    }
  };

  render() {
    return (
      <TextInput
        style={[
          styles.nameField,
          styles.wideButton,
          fonts.normal,
          this.props.style
        ]}
        multiline={false}
        autoCorrect={false}
        onChangeText={this._onChange}
        onSubmitEditing={this._onSubmit}
      />
    );
  }
}

const styles = StyleSheet.create({
  nameField: { backgroundColor: colors.tan, height: 60 },
  wideButton: { justifyContent: 'center', padding: 10, margin: 10 }
});

export default Input;
