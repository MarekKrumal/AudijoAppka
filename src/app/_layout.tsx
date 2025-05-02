import { Slot } from "expo-router";
import "../../global.css";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white",
    background: "#000",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <ClerkProvider tokenCache={tokenCache}>
        <Slot />
      </ClerkProvider>
    </ThemeProvider>
  );
}
