import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  aboutText: {
    fontSize: 18,
    marginBottom: 10,
  },
  aboutLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default function About() {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutText}>Carros Delicia</Text>
      <Text style={styles.aboutText}>Versão 1.0</Text>
      <Text style={styles.aboutText}>Desenvolvido por</Text>
      <Text style={styles.aboutText}>Leo Matheus Raifur</Text>
      <Text style={[styles.aboutText, styles.aboutLink]}>
        https://github.com/LeoMatheus
      </Text>
    </View>
  );
}
