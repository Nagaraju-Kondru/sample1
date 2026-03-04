import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {

  const handlePress = () => {
    alert("Expo Deploy Test Successful 🚀");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Deploy Test</Text>
      <Text>This is a sample React Native Expo app.</Text>
      <Text>Kondru Nagaraju</Text>

      <Button title="Click Me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
});