/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// react-native-vector-icons/Ionicons otherwise.
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

//== Views ==//
import HomeView from './views/HomeView/Homeview';
import TestView from './views/TestView/TestView';
import PokemonDetailsView from './views/PokemonDetailsView/PokemonDetailsView';
import MyPokemonView from './views/MyPokemonView/MyPokemonView';

const Stack = createNativeStackNavigator();

const App = () => {
  const HomeStack = createNativeStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeView}
          options={{title: '', headerShown: false}}
        />
        <HomeStack.Screen
          name="Details"
          component={PokemonDetailsView}
          options={{title: 'Characteristics of the Pokemon'}}
        />
      </HomeStack.Navigator>
    );
  }

  const MyPokemonStack = createNativeStackNavigator();

  function MyPokemonStackScreen() {
    return (
      <MyPokemonStack.Navigator>
        <MyPokemonStack.Screen
          name="MyPokemon"
          component={MyPokemonView}
          options={{title: 'This is my Pokemon Team'}}
        />
        <MyPokemonStack.Screen
          name="Details"
          component={PokemonDetailsView}
          options={{title: 'Characteristics of the Pokemon'}}
        />
      </MyPokemonStack.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                return (
                  <FontAwesomeIcon name="home" size={size} color={color} />
                );
              } else if (route.name === 'MyPokemon') {
                return (
                  <MaterialCommunityIconsIcon
                    name="pokeball"
                    size={size}
                    color={color}
                  />
                );
              }
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{title: '', headerShown: false}}
          />
          <Tab.Screen
            name="MyPokemon"
            component={MyPokemonStackScreen}
            options={{title: '', headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
