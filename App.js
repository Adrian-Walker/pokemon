import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

const path = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

export default function App() {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonIds = await fetch(path);
      const pokemonIdsBody = await pokemonIds.json();

      const pokemonInfo = pokemonIdsBody.map((poke) => fetch(poke.url));
      console.log(pokemonInfo);
    };
    fetchPokemon();
  }, []);
  console.log(pokemonDetails);

  return (
    <View style={styles.container}>
      <Text>NBA Ballers</Text>
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
