import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import LoginForm from "../components/LoginForm";
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          style={styles.image}
          source={require("./logo.png")}
          contentFit="contain"
        />
        <LoginForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  image: {
    width: 300,
    height: 100,
  },
});
