import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { PlayerEnum, SetupInfo } from "./lib/game.model";

const setupInfo: SetupInfo = {
  playerOne: "Shane",
  playerTwo: "Earl",
  targetScore: 125,
  startingPlayer: PlayerEnum.PLAYER_TWO,
};

const Setup = () => {
  const [playerOne, setPlayerOne] = useState(setupInfo.playerOne);
  const [playerTwo, setPlayerTwo] = useState(setupInfo.playerTwo);
  const [targetScore, setTargetScore] = useState<number>(setupInfo.targetScore);
  const [startingPlayer, setStartingPlayer] = useState<PlayerEnum>(
    setupInfo.startingPlayer,
  );
  const [errors, setErrors] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Player One</Text>
      <TextInput
        value={playerOne}
        onChangeText={setPlayerOne}
        placeholder="Shane Van Boening"
        style={styles.input}
      />

      <Text style={styles.label}>Player Two</Text>
      <TextInput
        value={playerTwo}
        onChangeText={setPlayerTwo}
        placeholder="Fedor Gorst"
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Target Score</Text>
      <TextInput
        value={String(targetScore)}
        placeholder="100"
        style={styles.input}
        inputMode={"numeric"}
        keyboardType="numeric"
      />

      <View style={styles.controlsContainer}>
        <Text style={{ fontWeight: "bold" }}>Target Score</Text>
        <View style={styles.controls}>
          <View style={styles.button}>
            <Button title={"+"} />
          </View>
          <TextInput
            textAlign={"center"}
            style={styles.input}
            inputMode={"numeric"}
            keyboardType={"numeric"}
          />
          <View style={styles.button}>
            <Button title={"-"} />
          </View>
        </View>
      </View>

      <View style={styles.controlsContainer}>
        <Text style={{ fontWeight: "bold" }}>Who starts?</Text>
        <View style={styles.controls}>
          <View
            style={[
              styles.button,
              startingPlayer === PlayerEnum.PLAYER_ONE && styles.selectedButton,
            ]}
          >
            <Button
              title={"Player One"}
              onPress={() => setStartingPlayer(PlayerEnum.PLAYER_ONE)}
            />
          </View>
          <View
            style={[
              styles.button,
              startingPlayer === PlayerEnum.PLAYER_TWO && styles.selectedButton,
            ]}
          >
            <Button
              title={"Player Two"}
              onPress={() => setStartingPlayer(PlayerEnum.PLAYER_TWO)}
            />
          </View>
        </View>
      </View>

      <Text style={{ color: "red" }}>{errors}</Text>

      <View style={styles.controlsContainer}>
        <Button title={"Start Game"} onPress={() => {}} />
      </View>
    </View>
  );
};

export default Setup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  controlsContainer: {
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    borderWidth: 1,
    borderColor: "blue",
    width: "30%",
    paddingVertical: 16,
    borderRadius: 6,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
  selectedButton: {
    backgroundColor: "blue",
    color: "white",
  },
  buttons: {
    borderTopWidth: 1,
    borderTopColor: "blue",
    paddingTop: 16,
    paddingHorizontal: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
