import React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { router } from "expo-router";
const HeaderApp = ({ buttons }: { buttons: string[] }) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = buttons;
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;
    const aboutButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case aboutButtonIndex:
            router.replace("/about");
            break;

          case destructiveButtonIndex:
            router.replace("/");
            break;

          case cancelButtonIndex:
        }
      },
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carros Delicia</Text>
      <Pressable onPress={onPress}>
        <Image
          style={styles.image}
          source={require("./burger-menu-right-svgrepo-com.svg")}
          contentFit="contain"
        />
      </Pressable>
    </View>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    width: 30,
    height: 5,
    marginRight: 20,
    // marginRight: -40,
  },
});
