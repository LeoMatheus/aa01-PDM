import React from "react";
import { Image } from "expo-image";
import { CommonActions } from "@react-navigation/native";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { router, useNavigation } from "expo-router";
const HeaderApp = ({ buttons }: { buttons: string[] }) => {
  const { showActionSheetWithOptions } = useActionSheet();
  const navigation = useNavigation();
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
            router.push("/about");
            break;

          case destructiveButtonIndex:
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "index" }],
              }),
            );
            break;

          case cancelButtonIndex:
        }
      },
    );
  };
  return (
    <Pressable onPress={onPress}>
      <Image
        style={styles.image}
        source={require("./burger-menu-right-svgrepo-com.svg")}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 40,
  },
});
