import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../Button';
import NormalText from '../NormalText';
import Input from '../Input';
import colors from '../../styles/colors';

const CreateDeckButton = ({ onPress }: { onPress: () => void }) => (
  <Button style={styles.createDeck} onPress={onPress}>
    <NormalText>Create Deck</NormalText>
  </Button>
);

type Props = {
  create: (text: string) => void;
};

type State = {
  text: string;
};

class EnterDeck extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { text: '' };
  }

  _create = () => this.props.create(this.state.text);

  render() {
    return (
      <View>
        <Input
          onEntry={this.props.create}
          onChange={text => this.setState({ text })}
        />
        <CreateDeckButton onPress={this._create} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  createDeck: { backgroundColor: colors.green }
});

export { CreateDeckButton, EnterDeck };
