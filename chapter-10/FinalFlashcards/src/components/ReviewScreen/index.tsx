import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import ViewCard from './ViewCard';
import { makeReviewSummary } from './ReviewSummary';
import colors from '../../styles/colors';
import { nextReview, stopReview } from '../../actions/creators';
import { QuizCardView } from '../../data/QuizCardView';

type Props = {
  currentReview: number;
  reviews: QuizCardView[];
  navigation: NavigationScreenProp<NavigationRoute>;
  nextReview: () => void;
  stopReview: () => void;
};

type State = {
  numReviewed: number;
  numCorrect: number;
};

class ReviewScreen extends Component<Props, State> {
  static navigationOptions = { title: 'Review' };

  constructor(props: Props) {
    super(props);
    this.state = { numReviewed: 0, numCorrect: 0 };
  }

  onReview = (correct: boolean) => {
    if (correct) {
      this.setState(prevState => ({ numCorrect: prevState.numCorrect + 1 }));
    }

    this.setState(prevState => ({ numReviewed: prevState.numReviewed + 1 }));
  };

  _nextReview = () => this.props.nextReview();

  _quitReviewing = () => {
    this.props.stopReview();
    this.props.navigation.goBack();
  };

  _contents() {
    if (!this.props.reviews || this.props.reviews.length === 0) {
      return null;
    }

    if (this.props.currentReview < this.props.reviews.length) {
      return (
        <ViewCard
          onReview={this.onReview}
          continue={this._nextReview}
          quit={this._quitReviewing}
          {...this.props.reviews[this.props.currentReview]}
        />
      );
    }

    const percent = this.state.numCorrect / this.state.numReviewed;
    return makeReviewSummary(percent, this._quitReviewing);
  }

  render() {
    return <View style={styles.container}>{this._contents()}</View>;
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.blue, flex: 1, paddingTop: 24 }
});

const mapDispatchToProps = (dispatch: any) => ({
  nextReview: () => dispatch(nextReview()),
  stopReview: () => dispatch(stopReview())
});

const mapStateToProps = (state: any) => ({
  reviews: state.currentReview.questions,
  currentReview: state.currentReview.currentQuestionIndex
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewScreen);
