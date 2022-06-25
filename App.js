import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

const path = "https://api-nba-v1.p.rapidapi.com/players";

export default function App() {
  useEffect(async () => {
    const fetchPlayers = async () => {
      const response = await fetch(path);
      return response;
    };
    fetchPlayers();
    response = await response.json();
  }, []);

  return (
    <View style={styles.container}>
      <Text>FUCK YOU</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
