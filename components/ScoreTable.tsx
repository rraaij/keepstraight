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
        <Text style={[styles.datafield, { textAlign: "left", width: "15%" }]}>
          {item.inning}
        </Text>
        <Text style={[styles.datafield, { marginRight: 20 }]}>{item.run}</Text>
        <Text
          style={[
            styles.datafield,
            styles.foul,
            !item.foul && { backgroundColor: "white" }, // need this to line up the columns if no foul
          ]}
        >
          F
        </Text>
        <Text style={styles.datafield}>{item.total}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.scoreContainer,
          { borderBottomWidth: 1, borderBottomColor: "lightgray" },
        ]}
      >
        <Text
          style={[
            styles.datafield,
            { fontWeight: "bold", textAlign: "left", width: "15%" },
          ]}
        >
          #
        </Text>
        <Text
          style={[styles.datafield, { fontWeight: "bold", marginRight: 20 }]}
        >
          R
        </Text>
        <Text
          style={[
            styles.datafield,
            { fontWeight: "bold", textAlign: "center", width: "15%" },
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
    fontFamily: "ArimoBold",
    width: "35%",
    textAlign: "right",
    fontSize: 18,
  },
  foul: {
    width: "15%",
    textAlign: "center",
    backgroundColor: "red",
    color: "white",
  },
});
