import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import styles from "../../assets/styles/basics";

export default function signin() {
  return (
    <>
      <View>
        <Image
          source={{
            uri: "https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png",
          }}
          style={styles.logo}
          resizeMode="cover"
        />
        <Text>Sign In</Text>
      </View>

      {/* Formulaire */}

      <View>
        <Text>Bienvenue sur la page de connection</Text>
        <Link href="/signup">No Account ? Register</Link>
      </View>
    </>
  );
}
