import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

const ChatbotScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => router.push("/home")} />
      <iframe 
        src="http://localhost:8501/" 
        style={{ width: "90%", height: "90%", border: "none" }} 
        title="Chatbot"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  }
});

export default ChatbotScreen;
