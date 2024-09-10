import { Stack } from "expo-router";

export default function userLayout() {
  return (
    <Stack>
      <Stack.Screen name="signin" options={{ title: "Se Connecter" }} />
      <Stack.Screen name="signup" options={{ title: "S'inscrire" }} />
    </Stack>
  );
}
