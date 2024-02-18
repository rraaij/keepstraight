import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ScoreTableHeader from "./components/ScoreTableHeader";
import ScoreTable from "./components/ScoreTable";
import ScoreTableFooter from "./components/ScoreTableFooter";
import Header from "./components/Header";
import { PlayerEnum } from "./lib/game.model";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Header />

        {/*TABLE HEADERS*/}
        <View style={styles.tableHeaders}>
          <View style={styles.tableHeaderContainer}>
            <ScoreTableHeader player={PlayerEnum.PLAYER_ONE} />
          </View>
          <View style={styles.tableHeaderContainer}>
            <ScoreTableHeader player={PlayerEnum.PLAYER_TWO} />
          </View>
        </View>

        {/*TABLE CONTENTS*/}
        <View style={styles.tableContents}>
          <View style={styles.tableContentContainer}>
            <ScoreTable player={PlayerEnum.PLAYER_ONE} />
          </View>
          <View style={styles.tableContentContainer}>
            <ScoreTable player={PlayerEnum.PLAYER_TWO} />
          </View>
        </View>

        {/*TABLE FOOTER*/}
        <View style={{ marginTop: "auto" }}>
          <ScoreTableFooter />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "blue",
  },
  tableHeaders: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  tableHeaderContainer: {
    width: "50%",
    padding: 2,
    borderWidth: 1,
    borderColor: "blue",
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
    borderColor: "blue",
  },
});
