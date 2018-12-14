import React from 'react';
import { StyleSheet } from 'react-native';
import Button from '../Button';
import NormalText from '../NormalText';
import colors from '../../styles/colors';

const ContinueButton = ({
  wasCorrect,
  onPress
}: {
  wasCorrect: boolean;
  onPress: () => void;
}) => {
  const text = wasCorrect
    ? 'Correct! Next card?'
    : 'Oops, not quite. Next card?';

  return (
    <Button onPress={onPress} style={styles.continueButton}>
      <NormalText>{text}</NormalText>
    </Button>
  );
};

const mkContinueQuitButtons = (
  showingAnswer: boolean,
  wasCorrect: boolean,
  continueFunc: () => void,
  quitFunc: () => void
) => {
  if (showingAnswer) {
    return <ContinueButton onPress={continueFunc} wasCorrect={wasCorrect} />;
  }

  return (
    <Button onPress={quitFunc} style={styles.continueButton}>
      <NormalText>Stop Reviewing</NormalText>
    </Button>
  );
};

const mkAnswerButtons = (
  answers: string[],
  correctAnswer: string,
  showingAnswer: boolean,
  wasCorrect: boolean,
  selectAnswerFunc: (isCorrectAnswer: boolean) => void
) => {
  if (!answers) {
    return null;
  }

  return answers.map(a => {
    const isCorrectAnswer = a === correctAnswer;
    const buttonStyle = [styles.options];
    if (showingAnswer && isCorrectAnswer) {
      if (wasCorrect) {
        buttonStyle.push(styles.rightAnswer);
      } else {
        buttonStyle.push(styles.wrongAnswer);
      }
    }

    return (
      <Button
        key={a}
        disabled={showingAnswer}
        style={buttonStyle}
        onPress={() => selectAnswerFunc(isCorrectAnswer)}
      >
        <NormalText>{a}</NormalText>
      </Button>
    );
  });
};

const styles = StyleSheet.create({
  options: { backgroundColor: '#FFFFFF' },
  continueButton: { backgroundColor: colors.tan },
  rightAnswer: { backgroundColor: colors.green },
  wrongAnswer: { backgroundColor: colors.pink }
});

export { mkContinueQuitButtons, mkAnswerButtons };
