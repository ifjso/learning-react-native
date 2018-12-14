import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../Button';
import LabeledInput from '../LabeledInput';
import NormalText from '../NormalText';
import colors from '../../styles/colors';

type Props = {};

type Stats = {
  front: string;
  back: string;
};

class NewCard extends Component<Props, Stats> {
  constructor(props: Props) {
    super(props);
    this.setState({ front: '', back: '' });
  }

  _handleFront = (text: string) => this.setState({ back: text });

  _handleBack = (text: string) => this.setState({ front: text });

  _createCard = () => console.warn('Not implemented');

  _reviewDeck = () => console.warn('Not implemented');

  _doneCreating = () => console.warn('Not implemented');

  render() {
    return (
      <View>
        <LabeledInput
          label="Front"
          clearOnSubmit={false}
          onEntry={this._handleFront}
          onChange={this._handleFront}
        />
        <LabeledInput
          label="Back"
          clearOnSubmit={false}
          onEntry={this._handleBack}
          onChange={this._handleBack}
        />

        <Button style={styles.createButton} onPress={this._createCard}>
          <NormalText>Create Card</NormalText>
        </Button>

        <View style={styles.buttonRow}>
          <Button style={styles.secondaryButton} onPress={this._doneCreating}>
            <NormalText>Done</NormalText>
          </Button>

          <Button style={styles.secondaryButton} onPress={this._reviewDeck}>
            <NormalText>Review Deck</NormalText>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  createButton: { backgroundColor: colors.green },
  secondaryButton: { backgroundColor: colors.blue },
  buttonRow: { flexDirection: 'row' }
});

export default NewCard;
