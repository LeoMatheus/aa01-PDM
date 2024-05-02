import React, { useState } from "react";
import { router } from "expo-router";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
const LoginForm = () => {
  const [username, setUsername] = useState("teste");
  const [password, setPassword] = useState("123");
  const [errorMessage, setErrorMessage]: any = useState(null);

  const handleSubmit = () => {
    if (username === "teste" && password === "123") {
      setErrorMessage(null);
      router.replace("/menu");
    } else {
      setErrorMessage("Nome ou senha invalido");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
      <Pressable style={styles.button} onPress={handleSubmit}>
        {/* <Text style={styles.buttonText}>Login</Text> */}
        <Image
          style={styles.image}
          contentFit="cover"
          source={require("./logoImage.jpeg")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
  },
  buttonText: {
    color: "white",
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#CD853F", // Green color
    borderRadius: 10,
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 15, // Add vertical padding
  },
});

export default LoginForm;
