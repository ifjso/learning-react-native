import React, { Component } from 'react';
import { CreateDeckButton, EnterDeck } from './DeckCreationFields';

type Props = {
  create: (name: string) => void;
};

type State = {
  showingNameField: boolean;
};

class DeckCreation extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showingNameField: false };
  }

  _newDeck = (name: string) => {
    this.setState({ showingNameField: false });
    this.props.create(name);
  };

  _showField = () => this.setState({ showingNameField: true });

  render() {
    const contents = this.state.showingNameField ? (
      <EnterDeck create={this._newDeck} />
    ) : (
      <CreateDeckButton onPress={this._showField} />
    );
    return contents;
  }
}

export default DeckCreation;
