import { View, Text, StyleSheet } from "react-native";
import { PlayerEnum } from "../lib/game.model";

const ScoreTableHeader = ({ player }: { player: PlayerEnum }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.player,
          player === PlayerEnum.PLAYER_ONE
            ? styles.selected
            : styles.unselected,
        ]}
      >
        {player === PlayerEnum.PLAYER_ONE ? "Player One" : "Player Two"}
      </Text>
    </View>
  );
};

export default ScoreTableHeader;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 2,
  },
  player: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 2,
  },
  selected: { backgroundColor: "yellow" },
  unselected: { backgroundColor: "white" },
});
