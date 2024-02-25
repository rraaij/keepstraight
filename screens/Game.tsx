import { StyleSheet, View } from "react-native";
import { Colors } from "../lib/Colors";
import { PlayerEnum } from "../lib/game.model";
import Header from "../components/Header";
import ScoreTableHeader from "../components/ScoreTableHeader";
import ScoreTable from "../components/ScoreTable";
import ScoreTableFooter from "../components/ScoreTableFooter";

const Game = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.tableHeaders}>
        <View style={styles.tableHeaderContainer}>
          <ScoreTableHeader player={PlayerEnum.PLAYER_ONE} />
        </View>
        <View style={styles.tableHeaderContainer}>
          <ScoreTableHeader player={PlayerEnum.PLAYER_TWO} />
        </View>
      </View>

      <View style={styles.tableContents}>
        <View style={styles.tableContentContainer}>
          <ScoreTable player={PlayerEnum.PLAYER_ONE} />
        </View>
        <View style={styles.tableContentContainer}>
          <ScoreTable player={PlayerEnum.PLAYER_TWO} />
        </View>
      </View>

      <View style={{ marginTop: "auto" }}>
        <ScoreTableFooter />
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.blue600,
  },
  tableHeaders: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  tableHeaderContainer: {
    width: "50%",
    paddingVertical: 2,
    paddingHorizontal: 1,
    borderWidth: 1,
    borderColor: Colors.blue600,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  tableContents: {
    flex: 1,
    flexDirection: "row",
    flexGrow: 1,
    backgroundColor: "white",
  },
  tableContentContainer: {
    width: "50%",
    borderWidth: 1,
    borderColor: Colors.blue600,
    backgroundColor: Colors.blue600,
  },
});
