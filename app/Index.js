import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

import signin from "./user/signin";
import signup from "./user/signup";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Image source={"./../"}></Image> */}

      <Text style={styles.title}>Bienvenue sur Airbnb World ! !</Text>
      <Link href={"user/signin"}>Signin</Link>
      <Link href={"user/signup"}>Signup</Link>
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
    fontSize: 24,
    fontWeight: "bold",
  },
});
