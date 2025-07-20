import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'EBGaramond': require('../assets/fonts/EBGaramond-Regular.ttf'),
    'Montserrat': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
    'InterRegular': require('../assets/fonts/Inter_18pt-Regular.ttf'),
    'InterBold': require('../assets/fonts/Montserrat-ExtraBold.ttf')
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
  <Stack>
    <Stack.Screen
      name="index"
      options={{
        headerShown: false
      }}
    />
  </Stack>
  )
}