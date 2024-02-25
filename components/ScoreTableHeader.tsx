import { View, Text, StyleSheet } from "react-native";
import { PlayerEnum } from "../lib/game.model";
import { useGameStore } from "../lib/game.store";

const ScoreTableHeader = ({ player }: { player: PlayerEnum }) => {
  const { setupInfo, playerAtTable } = useGameStore((state) => ({
    setupInfo: state.setup,
    playerAtTable: state.playerAtTable,
  }));

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.player,
          player === playerAtTable ? styles.selected : styles.unselected,
        ]}
      >
        {player === PlayerEnum.PLAYER_ONE
          ? setupInfo.playerOne
          : setupInfo.playerTwo}
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
    borderRadius: 4,
  },
  selected: { backgroundColor: "yellow" },
  unselected: { backgroundColor: "white" },
});
