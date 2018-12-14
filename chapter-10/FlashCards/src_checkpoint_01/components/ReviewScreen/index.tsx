import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ViewCard from './ViewCard';
import { MockReviews } from '../../data/Mocks';
import { QuizCardView } from '../../data/QuizCardView';
import { mkReviewSummary } from './ReviewSummary';
import colors from '../../styles/colors';

type Props = {};

type State = {
  numReviewed: number;
  numCorrect: number;
  currentReview: number;
  reviews: QuizCardView[];
};

class ReviewScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      numReviewed: 0,
      numCorrect: 0,
      currentReview: 0,
      reviews: MockReviews
    };
  }

  onReview = (correct: boolean) => {
    if (correct) {
      this.setState(prevState => ({ numCorrect: prevState.numCorrect + 1 }));
    }

    this.setState(prevState => ({ numReviewed: prevState.numReviewed + 1 }));
  };

  _nextReview = () =>
    this.setState(prevState => ({
      currentReview: prevState.currentReview + 1
    }));

  _quitReviewing = () => console.warn('Not implemented');

  _contents = () => {
    if (!this.state.reviews || this.state.reviews.length === 0) {
      return null;
    }

    if (this.state.currentReview < this.state.reviews.length) {
      return (
        <ViewCard
          onReview={this.onReview}
          continue={this._nextReview}
          quit={this._quitReviewing}
          {...this.state.reviews[this.state.currentReview]}
        />
      );
    }

    const percent = this.state.numCorrect / this.state.numReviewed;
    return mkReviewSummary(percent, this._quitReviewing);
  };

  render() {
    return <View style={styles.container}>{this._contents()}</View>;
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.blue, flex: 1, paddingTop: 24 }
});

export default ReviewScreen;
