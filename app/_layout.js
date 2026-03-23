import { Stack } from "expo-router";
import { Provider as PaperProvider, MD3DarkTheme } from 'react-native-paper';

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#bb86fc',
    secondary: '#03dac6',
    tertiary: '#03dac6',
  },
};

export default function RootLayout() {
    return(
        <>
        <PaperProvider theme={darkTheme}>
        <Stack screenOptions={{ headerShown: false }} />
        </PaperProvider>
        </>        
    )
}
