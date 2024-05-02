import { Stack } from "expo-router";
import React from "react";
import HeaderApp from "../components/HeaderApp";

import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { connectActionSheet } from "@expo/react-native-action-sheet";
// import { Container } from './styles';

const RootLayout = () => {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="menu"
          options={{
            headerTitle: () => (
              <HeaderApp buttons={["Logout", "Cancel", "About"]} />
            ),
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            headerTitle: () => <HeaderApp buttons={["Logout", "Cancel"]} />,
          }}
        />
      </Stack>
    </ActionSheetProvider>
  );
};
const ConnectedApp = connectActionSheet(RootLayout);
export default ConnectedApp;
