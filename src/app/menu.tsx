import {
  StyleSheet,
  View,
  Text,
  Pressable,
  SectionList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { router } from "expo-router";

import dataCrude from "../services/data";
export default function menu() {
  const [sections, setSections]: any = useState([]); // State variable for sections

  useEffect(() => {
    const transformedData = dataCrude.reduce((acc, item) => {
      const brandGroup = acc.get(item.brand) || { brand: item.brand, data: [] };
      brandGroup.data.push(item);
      acc.set(item.brand, brandGroup);
      return acc;
    }, new Map());
    setSections(Array.from(transformedData.values()));
  }, []); // Empty dependency array to run the effect only once

  return (
    <View>
      <SectionList
        sections={sections}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.brand} </Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>ID: {item.id}</Text>
            <Text>Model: {item.model}</Text>
            <Text>Year: {item.year}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: "center",
  },
  sectionTitle: {
    // marginTop: 16,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "#f0f0f0", // Light grey background
    padding: 20, // Increased padding
    color: "#333", // Darker text color
    borderBottomWidth: 1, // Bottom border
    borderBottomColor: "#ddd",
  },
  itemContainer: {
    alignSelf: "center",
    backgroundColor: "#fff", // White background
    borderStyle: "solid",
    borderColor: "#ddd",
    borderWidth: 1,
    margin: 10,
    padding: 15,
    width: "75%",
    borderRadius: 5, // Rounded corners
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2, // Light shadow
  },
});
