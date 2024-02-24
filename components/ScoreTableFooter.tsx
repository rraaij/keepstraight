import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import ScoreUpdater from "./ScoreUpdater";
import { Colors } from "../lib/Colors";

const ScoreTableFooter = () => {
  const [scoreUpdaterVisible, setScoreUpdaterVisible] =
    useState<boolean>(false);

  const addScoreHandler = () => {
    // handle updated score
    setScoreUpdaterVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.currentScores}>
        <View style={styles.column}>
          <Text style={styles.score}>
            {/*getCurrentScore*/}
            34
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.score}>
            {/*getCurrentScore*/}
            67
          </Text>
        </View>
      </View>

      <Text style={styles.possibleRun}>Possible Run: 90</Text>

      <View style={styles.actions}>
        <View style={styles.actionColumn}>
          <Button title={"Rerack"} onPress={() => console.log("RERACK")} />
        </View>
        <View style={styles.actionColumn}>
          <Button
            title={"Update Score"}
            onPress={() => setScoreUpdaterVisible(true)}
          />
        </View>
        {scoreUpdaterVisible && (
          <ScoreUpdater
            visible={scoreUpdaterVisible}
            onAddScore={addScoreHandler}
            onCancel={() => setScoreUpdaterVisible(false)}
          />
        )}
      </View>
    </View>
  );
};

export default ScoreTableFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue600,
    paddingVertical: 2,
  },
  currentScores: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexGrow: 1,
  },
  column: {
    width: "50%",
    padding: 2,
    borderWidth: 1,
    borderColor: Colors.blue600,
  },
  score: {
    textAlign: "right",
    paddingRight: 3,
    fontWeight: "bold",
    fontSize: 12,
  },
  possibleRun: {
    textAlign: "center",
    paddingLeft: 2,
    fontWeight: "bold",
    fontSize: 12,
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexGrow: 1,
  },
  actionColumn: {
    width: "50%",
    padding: 3,
  },
});
