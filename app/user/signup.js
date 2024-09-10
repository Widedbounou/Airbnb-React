import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import styles from "../../assets/styles/basics";

export default function signup() {
  return (
    <View>
      <Image
        source={{
          uri: "https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png",
        }}
        style={styles.logo}
        resizeMode="cover"
      />
      <Text>Bienvenue sur la page d'enregistrement</Text>
      <Link href="/signin">Already have an account ? Sign up</Link>
    </View>
  );
}
