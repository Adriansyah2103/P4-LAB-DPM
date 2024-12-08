import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import ScoreBoard from '../components/ScoreBoard';

const HomeScreen = () => {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  const incrementScore = (team) => {
    if (team === 'A') {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);
      checkWinner('Team A', newScore);
    } else if (team === 'B') {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);
      checkWinner('Team B', newScore);
    }
  };

  const decrementScore = (team) => {
    if (team === 'A' && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === 'B' && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  const checkWinner = (team, score) => {
    if (score >= 10) {
      Alert.alert('Winner!', `${team} wins the game!`);
      resetScores();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Futsal Score Manager ⚽</Text>
      <ScoreBoard
        teamName="Team A"
        score={scoreTeamA}
        onIncrement={() => incrementScore('A')}
        onDecrement={() => decrementScore('A')}
      />
      <ScoreBoard
        teamName="Team B"
        score={scoreTeamB}
        onIncrement={() => incrementScore('B')}
        onDecrement={() => decrementScore('B')}
      />
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
