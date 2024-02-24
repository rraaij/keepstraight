import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PlayerEnum, SetupInfo } from "../lib/game.model";
import { Colors } from "../lib/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { bold } from "colorette";

const setupInfo: SetupInfo = {
  playerOne: "Shane",
  playerTwo: "Earl",
  targetScore: 125,
  startingPlayer: PlayerEnum.PLAYER_TWO,
};

const Setup = ({ navigation }: { navigation: any }) => {
  const [playerOne, setPlayerOne] = useState(setupInfo.playerOne);
  const [playerTwo, setPlayerTwo] = useState(setupInfo.playerTwo);
  const [targetScore, setTargetScore] = useState<number>(setupInfo.targetScore);
  const [startingPlayer, setStartingPlayer] = useState<PlayerEnum>(
    setupInfo.startingPlayer,
  );
  const [errors, setErrors] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <Text style={styles.label}>Player One</Text>
        <TextInput
          value={playerOne}
          onChangeText={setPlayerOne}
          placeholder="Shane Van Boening"
          style={styles.input}
        />
      </View>

      <View style={styles.controlsContainer}>
        <Text style={styles.label}>Player Two</Text>
        <TextInput
          value={playerTwo}
          onChangeText={setPlayerTwo}
          placeholder="Fedor Gorst"
          style={styles.input}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.controlsContainer}>
        <Text style={styles.label}>Target Score</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <PrimaryButton onPress={() => {}}>
            <Ionicons name={"remove"} size={24} color={"white"} />
          </PrimaryButton>
          <TextInput
            value={String(targetScore)}
            placeholder="100"
            style={[
              styles.input,
              { width: 80, textAlign: "center", marginHorizontal: 10 },
            ]}
            inputMode={"numeric"}
            keyboardType="numeric"
          />
          <PrimaryButton onPress={() => {}}>
            <Ionicons name={"add"} size={24} color={"white"} />
          </PrimaryButton>
        </View>
      </View>

      <View style={styles.controlsContainer}>
        <Text style={styles.label}>Who starts?</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <PrimaryButton
            toggled={startingPlayer === PlayerEnum.PLAYER_ONE}
            onPress={() => setStartingPlayer(PlayerEnum.PLAYER_ONE)}
          >
            <Text>Player One</Text>
          </PrimaryButton>
          <PrimaryButton
            toggled={startingPlayer === PlayerEnum.PLAYER_TWO}
            onPress={() => setStartingPlayer(PlayerEnum.PLAYER_TWO)}
          >
            <Text>Player Two</Text>
          </PrimaryButton>
        </View>
      </View>

      <Text style={{ color: "red" }}>{errors}</Text>

      <View style={{ alignItems: "center", width: "100%" }}>
        <PrimaryButton onPress={() => navigation.navigate("Game")}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Start Game</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default Setup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  controlsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  label: {
    color: Colors.blue900,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 12,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    width: 230,
  },
  controls: {
    flexDirection: "row",
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.blue600,
    width: "30%",
    paddingVertical: 16,
    borderRadius: 6,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
  selectedButton: {
    backgroundColor: Colors.blue600,
    color: "white",
  },
  buttons: {
    borderTopWidth: 1,
    borderTopColor: Colors.blue600,
    paddingTop: 16,
    paddingHorizontal: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
