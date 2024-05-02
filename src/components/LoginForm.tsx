import React, { useState } from "react";
import { router } from "expo-router";
import { View, TextInput, Button, StyleSheet } from "react-native";

const LoginForm = () => {
  const [username, setUsername] = useState("teste");
  const [password, setPassword] = useState("123");

  const handleSubmit = () => {
    console.log(username);
    console.log(password);
    router.replace("/menu");
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
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
});

export default LoginForm;
