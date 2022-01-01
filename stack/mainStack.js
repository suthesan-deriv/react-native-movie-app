import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home'
import MovieDetails from '../screens/movieDetails'

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen options={{ title: 'Movie Details' }} name="MovieDetails" component={MovieDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default MainStack