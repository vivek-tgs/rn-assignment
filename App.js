//@flow

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import { SCREEN_ROUTES } from './src/constants';

const App = (): React.Node => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREEN_ROUTES.welcome}
            component={WelcomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name={SCREEN_ROUTES.about}
            component={AboutScreen}
            options={{ title: 'About' }}
          />
          <Stack.Screen
            name={SCREEN_ROUTES.home}
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
        </Stack.Navigator>
        {/* </SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
