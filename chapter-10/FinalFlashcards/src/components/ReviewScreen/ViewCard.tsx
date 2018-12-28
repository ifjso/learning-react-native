import React, { Component } from 'react';
import { View } from 'react-native';
import HeadingText from '../HeadingText';
import { makeContinueQuitButtons, makeAnswerButtons } from './ReviewButtons';

type Props = {
  prompt: string;
  answers: string[];
  correctAnswer: string;
  onReview: (correct: boolean) => void;
  continue: () => void;
  quit: () => void;
};

type State = {
  showingAnswer: boolean;
  wasCorrect: boolean;
};

class ViewCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = this._getInitialState();
  }

  _getInitialState(): State {
    return { showingAnswer: false, wasCorrect: false };
  }

  _continue = () => {
    this.setState(this._getInitialState());
    this.props.continue();
  };

  _selectAnswer = (correct: boolean) => {
    this.props.onReview(correct);
    this.setState({ showingAnswer: true, wasCorrect: correct });
  };

  render() {
    return (
      <View>
        <HeadingText>{this.props.prompt}</HeadingText>

        {makeAnswerButtons(
          this.props.answers,
          this.props.correctAnswer,
          this.state.showingAnswer,
          this.state.wasCorrect,
          this._selectAnswer
        )}

        {makeContinueQuitButtons(
          this.state.showingAnswer,
          this.state.wasCorrect,
          this._continue,
          this.props.quit
        )}
      </View>
    );
  }
}

export default ViewCard;
