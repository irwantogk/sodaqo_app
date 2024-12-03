import { Stack } from "expo-router";
// import { useEffect } from "react";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // useEffect(() => {
  //   const prepare = async () => {
  //     // Simulasi loading (ganti dengan logika loading Anda)
  //     await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 detik
  //     await SplashScreen.hideAsync(); // Menyembunyikan splash screen
  //   };

  //   prepare();
  // }, []);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
