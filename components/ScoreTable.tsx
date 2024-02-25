import { FlatList, StyleSheet, View, Text } from "react-native";
import { PlayerEnum, Score } from "../lib/game.model";
import { Colors } from "../lib/Colors";
import { useGameStore } from "../lib/game.store";

const ScoreTable = ({ player }: { player: PlayerEnum }) => {
  const { scores } = useGameStore((state) => ({
    scores: state.scoreTable.getScoresForPlayer(player),
  }));

  const renderScore = ({ item }: { item: Score }) => {
    return (
      <View style={styles.scoreContainer}>
        <Text style={[styles.datafield, { textAlign: "left" }]}>
          {item.inning}
        </Text>
        <Text style={styles.datafield}>{item.run}</Text>
        <Text style={[styles.datafield, { textAlign: "center" }]}>
          {item.foul && (
            <View style={styles.foul}>
              <Text style={styles.foulText}>F</Text>
            </View>
          )}
        </Text>
        <Text style={styles.datafield}>{item.total}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text
          style={[styles.datafield, { fontWeight: "bold", textAlign: "left" }]}
        >
          #
        </Text>
        <Text style={[styles.datafield, { fontWeight: "bold" }]}>S</Text>
        <Text
          style={[
            styles.datafield,
            { fontWeight: "bold", textAlign: "center" },
          ]}
        >
          F
        </Text>
        <Text style={[styles.datafield, { fontWeight: "bold" }]}>T</Text>
      </View>

      <FlatList
        data={scores}
        renderItem={renderScore}
        keyExtractor={(item) => item.inning.toString()}
      />
    </View>
  );
};

export default ScoreTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: Colors.blue600,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 4,
    overflow: "hidden",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  datafield: {
    width: "25%",
    textAlign: "right",
    fontSize: 18,
  },
  foul: {
    backgroundColor: "red",
    paddingHorizontal: 3,
    borderRadius: 3,
  },
  foulText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});
