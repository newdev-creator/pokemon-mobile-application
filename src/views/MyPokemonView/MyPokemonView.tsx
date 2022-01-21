/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as commonStyle from '../../utils/commonStyle';

import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
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

import { Card, ListItem, Icon } from 'react-native-elements';

const MyPokemonView = (props: any) => {

  return (
    <View>
      <Text>This is my list of Pokemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePokemon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 300,
    width: 300,
  },
  detail_container: {
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    ...commonStyle.elevationButton,
  },
});

export default MyPokemonView;
