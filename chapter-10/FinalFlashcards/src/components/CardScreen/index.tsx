import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { addCard } from '../../actions/creators';
import Button from '../Button';
import LabeledInput from '../LabeledInput';
import NormalText from '../NormalText';
import colors from '../../styles/colors';

type Props = {
  navigation: NavigationScreenProp<NavigationRoute>;
  createCard: (front: string, back: string, deckID: string) => void;
};

type State = {
  front: string;
  back: string;
};

class CardScreen extends Component<Props, State> {
  static navigationOptions = { title: 'Create Card' };

  constructor(props: Props) {
    super(props);
    this.state = { front: '', back: '' };
  }

  _deckID = () => {
    const params = this.props.navigation.state.params;
    return params ? params.deckID : '';
  };

  _handleFront = (text: string) => this.setState({ front: text });

  _handleBack = (text: string) => this.setState({ back: text });

  _createCard = () => {
    this.props.createCard(this.state.front, this.state.back, this._deckID());
    this.props.navigation.navigate('CardCreation', { deckID: this._deckID() });
  };

  _reviewDeck = () => this.props.navigation.navigate('Review');

  _doneCreating = () => this.props.navigation.navigate('Home');

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

const mapDispatchToProps = (dispatch: any) => ({
  createCard: (front: string, back: string, deckID: string) =>
    dispatch(addCard(front, back, deckID))
});

const mapStateToProps = (state: any) => ({
  decks: state.decks
});

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(CardScreen);
